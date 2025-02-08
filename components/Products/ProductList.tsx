import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import ProductTable from './ProductTable'

export default function ProductList() {
  return (
    <div className='w-full bg-secondary p-5 rounded-md'>
      <div className='w-full flex justify-between place-items-center'>
        <h1 className='text-gray-400 text-xl'>All Products</h1>
        <div className='flex gap-4'>
        
        </div>
      </div>

      <ProductTable/>
     
    </div>
  )
}