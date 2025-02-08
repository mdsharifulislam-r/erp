
import React from 'react'
import PurchaseForm from './PurchaseForm'


export default function PurchaseItem() {
  return (
    <div className='p-5 mt-5 bg-secondary rounded-md'>
      <div>
        <h1 className='text-gray-200 text-xl'>Purchase Products</h1>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>
        <div className='w-full my-5 bg-gray-500 h-[1px]'></div>
      </div>
      <PurchaseForm/>
    </div>
  )
}
