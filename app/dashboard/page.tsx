import Categories from '@/components/Dashboard/Categories'
import ChartsContainer from '@/components/Dashboard/Charts/ChartsContainer'
import LeadsAndActivity from '@/components/Dashboard/LeadsAndActivity'
import Navbar from '@/components/Dashboard/Navbar'
import React from 'react'

export default function page() {
  return (
    <div className='w-full '>
   
      <Categories/>
      <ChartsContainer/>
      <LeadsAndActivity/>
    </div>
  )
}
