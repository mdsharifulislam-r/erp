import React, { useState } from 'react'
import { FaClipboard } from 'react-icons/fa6'
import Copy from 'clipboard-copy'
import { BsClipboard2, BsClipboard2Check } from 'react-icons/bs'
export default function ValueField({value,label}:{value:string,label:string}) {
    const [copying,setCopying]=useState(false)
    const copy =async ()=>{
        setCopying(true)
        try {
            await Copy(value||"")
        } catch (error) {
            
        }
        setTimeout(()=>{
            setCopying(false)
        },3000)
    }
  return (
    <div>
        <span className='text-gray-400 text-sm mb-1'>
        {label}
        </span>
<div className='w-full bg-secondary px-3 border border-gray-400 flex place-items-center justify-between py-2 rounded-md'>
      <div>
        <span>{value}</span>
      </div>
      <div onClick={copy}>
      {copying?<BsClipboard2Check/>:<BsClipboard2/>}
      </div>
    </div>
    </div>
    
  )
}
