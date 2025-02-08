import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { FaUser } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';
import { IoMdNotificationsOutline } from "react-icons/io";
import Profile from './Profile/Profle';
import AddUser from './Profile/AddUser';
export default function Navbar() {
  return (
    <>
    <div className='w-full py-5 px-5 flex justify-between items-center bg-secondary rounded-md'>
      <div className='text-xl text-gray-400 p-2 active:bg-gray-600 rounded-md'>
        <CiMenuBurger/>
      </div>
      <div className='flex gap-5 items-center'>
        <button className='text-xl text-gray-400 p-2 active:bg-gray-600 rounded-md'>
            <IoMdNotificationsOutline/>
        </button>

            <Profile/>
      
        <button className='text-xl text-gray-400 p-2 active:bg-gray-600 rounded-md'>
            <FcSettings/>
        </button>
      </div>
     
    </div>
    <AddUser/>
    </>
    
  )
}
