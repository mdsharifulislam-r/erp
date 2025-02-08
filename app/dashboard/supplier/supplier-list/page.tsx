
import ClientList from '@/components/Client/ClientList'
import React from 'react'

export default function page() {
  return (
    <div className='w-full bg-primary mt-5 min-h-screen'>
      <ClientList type='supplier'/>
    </div>
  )
}
