import AddClient from '@/components/Client/AddClient'
import React from 'react'

export default function page() {
  return (
    <div className='w-full bg-primary  min-h-screen'>
      <AddClient type='supplier'/>
    </div>
  )
}
