import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import Pagination from '../Statements/Pagination'
import SaleTable from './SaleTable'

export default function SaleList() {
  return (
    <div className='w-full mt-5 bg-secondary p-5 rounded-md'>
      <div className='w-full flex justify-between place-items-center'>
        <h1 className='text-gray-400 text-xl'>All Sales</h1>
        <div className='flex gap-4'>
         
        </div>
      </div>

        <div className='w-full my-5 bg-gray-500 h-[1px]'></div>

        <SaleTable/>
        <Pagination
        endpoint='/sale/page'
        />
    </div>
  )
}
