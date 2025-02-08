import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'

export default function ItemMenu({item}:{item:{link:string,icon:any,label:string,links?:{link:string,label:string,icon:any}[]}}) {
  const [open,setOpen]=useState(false)
  const items = item.links?.length ? item.links?.map((item,index)=>(
    <Item item={item} key={index}/>
  )):[]

  const pathname = usePathname()
  const link = pathname.replace("/dashboard","")
  return (

    <div className='w-full pl-8'>
      <Link href={`/dashboard${item.link}`} className="header flex place-items-center gap-3 py-2 text-sm text-icon" onClick={()=>setOpen(!open)}>
        <span>
         {item.icon}
        </span>
        <span className='text-gray-400'>
          {item.label}
        </span>
      </Link>
      <div className={`menu pl-5 ${open?"block":"hidden"}`}>
        {items}
      </div>
    </div>
  )
}

function Item({item}:{item:{link:string,label:string,icon:any}}){
  const pathname = usePathname()
  
  
  return (
    <Link href={`/dashboard${item.link}`} className='flex gap-2 py-2 relative before:absolute before:w-2 before:h-full  before:top-0 before:left-0 text-sm'>
      <span className='text-icon'>
        {item.icon}
      </span>
      <span className={`${pathname==`/dashboard${item.link}`?"text-blue-500":"text-gray-400"}`}>
        {item.label}
      </span>
    </Link>
  )
}