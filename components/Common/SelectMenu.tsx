'use client'
import { getMehod } from '@/lib/helper/getMethod'
import React, { useEffect, useState } from 'react'

export default function SelectMenu(props:React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>&{options?:string[],label:string,endpoint?:string}) {
    const [options,setOPtions]=useState<string[]>([])
    useEffect(()=>{
        if(props?.options?.length){
            setOPtions(props?.options)
            return
        }
        if(props.endpoint?.length){
        getMehod(
            props?.endpoint||"",
        ).then(data=>setOPtions(data))
    }
    },[])
    const lists = options?.map((item,index)=>(
<option key={index} value={item}>{item}</option>
    ))
  return (
    <div className='px-3 py-2 bg-primary rounded-md'>
      <select {...props} className='bg-transparent' >
        <option  value="" >{props.label}</option>
        {lists}
      </select>
    </div>
  )
}
