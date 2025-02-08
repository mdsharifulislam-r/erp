import Navbar from '@/components/Dashboard/Navbar'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className='w-full min-h-screen bg-primary'>
      <div className=' mx-auto flex'>
        <div className="sidebar w-[20%]">
            <Sidebar/>
        </div>
        <div className="main w-[80%] p-5">
          <Navbar/>
          {children}
        </div>
      </div>
    </div>
  )
}
