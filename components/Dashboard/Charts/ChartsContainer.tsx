import React from 'react'
import SalesChart from './SelesChart'
import ParchessReviewChart from './ParchessChart'

export default function ChartsContainer() {
  return (
    <div className='flex w-ful gap-5 mt-5'>
        <div className='w-1/2 p-4 bg-secondary rounded-md'>
        <h1 className='text-gray-400 text-xl py-3'>Salse Review</h1>
        <SalesChart/>
        </div>
        <div className='w-1/2 p-4 bg-secondary rounded-md'>
        <h1 className='text-gray-400 text-xl py-3'>Purchess Review</h1>
        <ParchessReviewChart/>
        </div>
      
    </div>
  )
}
