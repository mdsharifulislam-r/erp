import React from 'react'
import ClientForm from './ClientForm'

export default function AddClient({type="client"}:{type?:"client"|"supplier"}) {
  return (
    <div className='p-5 mt-5 bg-secondary rounded-md'>
      <div>
        <h1 className='text-gray-200 text-xl'>Add {type=='client'?"Client":"Supplier"} Data</h1>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>
        <div className='w-full my-5 bg-gray-500 h-[1px]'></div>
      </div>
      <ClientForm type={type}/>
    </div>
  )
}
