import React from 'react'
import TotalLeadsChart from './Charts/LeadsChart'
import TotalVendorChart from './Charts/TotalVendorChart'
import Actitvity from './activity/Actitvity'

export default function LeadsAndActivity() {
  return (
    <div className='w-full flex gap-5 mt-5'>
      <div className="w-[50%] ">
      
            <TotalLeadsChart/>
     
      </div>
      <div className='w-[50%] p-5 bg-secondary rounded-md'>
                <h1 className='text-xl text-gray-400'>Activity</h1>
                <Actitvity/>
            </div>
    </div>
  )
}
