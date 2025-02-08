"use client"
import { getMehod } from '@/lib/helper/getMethod'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Pagination({endpoint}:{endpoint:string}) {
    const [page,setPage]=useState<number[]>([])
    const limit = useSearchParams().get('limit')
    const range = limit?parseInt(limit):1
    
    useEffect(()=>{
        getMehod(
            endpoint,
            ['account']
        ).then(data=>setPage(data))
    },[])

    const showPages = page?.map((item,index)=>(
        <Link href={`?limit=${item}`} key={index} className={`join-item btn ${range==item?"btn-active":" !bg-primary"}`}>{item}</Link>
    ))
  return (
    <div className='flex justify-end py-2'>
   <div className="join">
   {showPages}
 
</div>
    </div>
 
  )
}
