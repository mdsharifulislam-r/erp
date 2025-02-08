'use client'
import React, { FormEvent } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import StatementTable from './StatementTable'
import Pagination from './Pagination'
import SelectMenu from '../Common/SelectMenu'
import { useRouter } from 'next/navigation'



export default function StatementContainer() {

  const router = useRouter()
  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const str = `?account_type=${data?.account_type}&transiction_type=${data?.transiction_type}`
    router.push(str                                                                                                                                                                                                                                                                                                                                                                                                                                        )

  }
  return (
    <div className='w-full bg-secondary p-5 rounded-md'>
      <div className='w-full flex justify-between place-items-center'>
        <h1 className='text-gray-400 text-xl'>All Statements</h1>
        <form onSubmit={handleSubmit} className='flex gap-4'>
          <SelectMenu
          label='Payment Type'
          endpoint='/account?list=true'
          name='account_type'
          />

          <SelectMenu
          label='Trnansiction Type'
          options={["diposit","purchase",'sell',"bill"]}
          name='transiction_type'
          />
           <button className='px-3 py-2 bg-emerald-400 text-white rounded-md'>
          Search
        </button>
        </form>
       
      </div>
      <StatementTable/>
     <Pagination
     endpoint='/statement/page'
     />
    </div>
  )
}
