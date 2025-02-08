import React from 'react'
import SideItem from './SideItem'
import { sideItems } from '@/constrans'


export default function SideMenu() {
  const items = sideItems.map((item,index)=>(
    <SideItem item={item} key={index}/>
  ))
  return (
    <div className=' mt-10'>
      {items}
    </div>
  )
}
