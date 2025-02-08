'use client'
import React from 'react'
import { FaUser } from 'react-icons/fa6';
import { HiDotsVertical } from "react-icons/hi";
import AddUser from './AddUser';
import { LogOut } from '@/lib/helper/logout';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
export default function Profile() {
    const router = useRouter()
    const logoutUser=async ()=>{
        await LogOut()
        toast.success("Logged out successfully")
        router.push('/login')
    }
  return (
    <div className="dropdown dropdown-left">
  <div tabIndex={0} role="button" className=" m-1">
    <FaUser/>
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><label htmlFor="add-user">Add User</label></li>
    <li><span onClick={logoutUser}>Logout</span></li>
  </ul>
</div>
  )
}
