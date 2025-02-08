'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import InputItem from '../Common/InputForm'
import LoadingButton from '../Common/LoadingButton/LoadingButton'
import { useFormik } from 'formik'
import { loginSchema } from '@/validation/validation'
import { loginUser } from '@/lib/helper/login.helper'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
    const initialValues={
        username: 'sharif1234',
        password: '12345678'
    }
    
    const [loading,setLoading]=useState(false)
    const router = useRouter()

    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues,
        validationSchema:loginSchema,
        onSubmit: async (values,action) => {
            setLoading(true)
            const data = await loginUser(values)
            if(data.status){
            setLoading(false)
                toast.success(data.message)
                action.resetForm()
                router.push('/dashboard')
            }else{
            setLoading(false)
                toast.error(data.message)
            }
            
        },
  
    })
  return (
    <div className='lg:w-[40%] md:w-[60%] w-[90%] bg-secondary rounded-md p-5 min-h-64'>
      <div className='flex flex-col place-items-center'>
        <Image src={"/image/logo.webp"} alt='' width={50} height={50}/>
        <h1 className='text-gray-200 text-xl'>Login as Admin</h1>
        
        <div className='w-full my-5 bg-gray-500 h-[1px]'></div>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3 px-5'>
        <InputItem type='text'
        label='Username'
        id='username'
        error={errors.username}
        onChange={handleChange}
        required
        name='username'
        value={values.username}
        />
        <InputItem type='password'
        name='password'
        label='Password'
        id='password'
        required
        error={errors.password}
        onChange={handleChange}
        value={values.password}
        />
        <div className='pb-7'>
            <LoadingButton isLoading={loading} className='w-full px-5 py-2 bg-blue-500 text-white rounded-md'>Login</LoadingButton>
        </div>
      </form>
    </div>
  )
}
