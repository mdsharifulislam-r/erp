import React from 'react'
import BillTable from './BillTable'


export default function BillList() {
  return (
    <div className='w-full mt-5 bg-secondary p-5 rounded-md'>
      <div className='w-full flex justify-between place-items-center'>
        <h1 className='text-gray-400 text-xl'>All Bill Statements</h1>
        <div className='flex gap-4'>
         
        </div>
      </div>

        <div className='w-full my-5 bg-gray-500 h-[1px]'></div>

       <BillTable/>
    </div>
  )
}
