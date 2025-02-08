'use client';
import React, { FormEvent, useEffect, useState } from 'react'
import InputWithDropdown from '../Common/DropInput'
import InputItem from '../Common/InputForm'
import { getMehod } from '@/lib/helper/getMethod';
import { ProductType } from '@/types/types';
import LoadingButton from '../Common/LoadingButton/LoadingButton';
import { otherMethod } from '@/lib/helper/postMethod';
import toast from 'react-hot-toast';

export default function PurchaseForm() {
    const [supplier,setSupplier]=useState("")
    const [product,setProduct]=useState<ProductType>()
    const [paymentMethod,setPaymentMethod]=useState("")
    const [name,setName]=useState("")
    const [quantity,setQuantity]=useState(0)
    const [totalAmount,setTotalAmount]=useState(0)
    const [paid,setPaid]=useState(0)
    
    const getProductsDetails = async ()=>{
        const res = await getMehod(`/product/${name}`)
        setProduct(res)
    }

    useEffect(()=>{
        getProductsDetails()
    },[name])

    useEffect(()=>{
        if(product){
            setTotalAmount(product.sell_price*quantity)
            setPaid(product.sell_price*quantity)
        }
    },[product,quantity])

    const formRef = React.useRef<HTMLFormElement>(null)
    const handleSubmit= async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const data = {
            product_name:name,
            supplier:supplier,
            paid_account:paymentMethod,
            total_amount:totalAmount,
            paid:paid,
        }
        const res = await otherMethod({
            url:'/purchase',
            method:'POST',
            body:data,
            validationTag:'purchase'
        })
        if(res.status){
            formRef.current?.reset()
            toast.success(res.message)
            setSupplier("")

            setProduct(undefined)
            setName("")
            setQuantity(0)
            setTotalAmount(0)
            setPaid(0)

        }
        else{
            toast.error(res.message)
        }
    }
  return (
    <div>
    <form
     onSubmit={handleSubmit}
    ref={formRef}
      action=""
      className="grid grid-cols-2 gap-5"
    >
        <InputWithDropdown
        label='Product Name'
        endpoint='/product?'
        getOption={setName}

        />

    <InputWithDropdown
        label='Supplier Name'
        endpoint='/client?status=supplier&'
        getOption={setSupplier}
        />
        <InputItem
        label='Quantity'
        type='number'
        required
        name='total_amount'
        value={quantity.toString()||'0'}
        onChange={(e)=>setQuantity(parseInt(e.target.value))}
        />

        <InputWithDropdown
        label='Payment Method'
        endpoint='/account?'
        getOption={setPaymentMethod}
        />
        <InputItem
        label='Total Balance'
        type='number'
        required
        name='paid'
        disabled
        value={totalAmount.toString()||'0'}
        />

        <div className='col-span-2'>
        <LoadingButton isLoading={false} className='btn bg-emerald-500 text-white'>
            Purchase
        </LoadingButton>
        </div>
        
       </form>
    </div>
  )
}
