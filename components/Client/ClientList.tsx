import React from 'react'
import ClientTable from './ClientTable'

export default function ClientList({type="client"}:{type?:string}) {
  return (
    <div className='w-full p-5 min-h-64 rounded-md bg-secondary'>
      <div>
        <div>
        <h1 className='text-xl text-gray-300'>All {type=='client'?"Clients":"Supplier"}</h1>
        </div>
      </div>
      <div className='w-full my-5 bg-gray-500 h-[1px]'></div>
      <ClientTable type={type}/>
    </div>
  )
}
