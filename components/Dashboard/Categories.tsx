import { demoDashData } from '@/constrans';
import { getMehod } from '@/lib/helper/getMethod';
import React from 'react'
import { PiMoneyWavyThin } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
export default function Categories() {
    const boxs = demoDashData?.map((item,index)=>(
        <Box link={item.link} icon={item.icon} label={item.label} amount={item.amount} key={index}/>
  
    ))
  return (
    <div className='w-full mt-5 grid gap-5 grid-cols-4'>
    {boxs}
    </div>
  )
}

async function Box({icon,label,amount,link}:{icon:any,label:string,amount:number,link:string}){
  const data = await getMehod(`/details?name=${link}`,['account'])
    return (
      <div className='w-full bg-secondary flex gap-3 items-center p-5 rounded-md'>
        <div className='text-5xl p-3  text-gray-400'>
            {icon}
        </div>
        <div>
            
            <p className='text-gray-400 text-sm'>{label}</p>
            <h1 className='text-gray-400 text-xl font-bold flex items-center'>
                <span>{data?.total_sum??amount}</span>
                <span><TbCurrencyTaka/></span>
            </h1>
        </div>
      </div>
    )
  
}