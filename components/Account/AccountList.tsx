import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import AccountTable from './AccoutTable'
import AddAccount from './AddAccount'
import AddBalance from './AddBalance'

export default function AccountList() {
  return (
    <div className='w-full bg-secondary p-5 rounded-md'>
      <div className='w-full flex justify-between place-items-center'>
        <h1 className='text-gray-400 text-xl'>All Accounts</h1>
        <div className='flex gap-4'>
           <AddAccount/>
            <AddBalance/>
        </div>
      </div>

      <AccountTable/>
    </div>
  )
}
