import React from 'react'

import BillForm from './BillForm'

export default function PayBill() {
  return (
    <div className='p-5 mt-5 bg-secondary rounded-md'>
      <div>
        <h1 className='text-gray-200 text-xl'>Pay Bill</h1>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>
        <div className='w-full my-5 bg-gray-500 h-[1px]'></div>
      </div>
      <BillForm/>
    </div>
  )
}
