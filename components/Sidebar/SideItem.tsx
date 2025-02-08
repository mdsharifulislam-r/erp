'use client'
import React, { useState } from 'react'
import { FiPieChart } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import ItemMenu from './SideItem/ItemMenu';
import { SideItemType } from '@/types/types';
export default function SideItem({item}:{item:SideItemType}) {
  const [open,setOpen]=useState(false)
  const items = item.links?.length? item.links?.map((item,index)=>(
    <ItemMenu item={item} key={index}/>
  )):[]
  return (
    <div className={`py-2 px-3 my-3 rounded-md ${open?"bg-gray-900 ":""} transition-all duration-300 cursor-pointer`} >
      <div className="header flex justify-between place-items-center" onClick={()=>setOpen(!open)}>
        <div className='flex place-items-center gap-4 text-base font-bold'>
        <span className=' text-xl text-icon'>
            {item.icon}
        </span>
        <h3 className='text-gray-400'>{item.label}</h3>
        </div>
        <span className={`text-gray-400 ${open?"rotate-90":"rotate-0"} transition-all duration-300`}>
            <IoIosArrowForward/>
        </span>
      </div>
      <div className={` ${open?"block":"hidden"} ${open?"scale-y-full":"scale-y-0"} py-2 duration-300 transition-all delay-400 origin-top`}>
        {items}
      </div>
    </div>
  )
}
