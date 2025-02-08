import Image from 'next/image'
import React from 'react'
import SideMenu from './SideMenu'

export default function Sidebar() {
  return (
    <div className='w-full sticky top-0 h-screen overflow-y-scroll bg-secondary p-5'>
      <div className="logo flex place-items-center gap-3 justify-center">
        <Image src={'/image/logo.webp'} width={40} height={40} alt='logo'/>
        <h1 className="text-gray-400 text-xl font-bold">ERP Admin</h1>
      </div>
      <SideMenu/>
    </div>
  )
}
