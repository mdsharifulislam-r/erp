import { getMehod } from "@/lib/helper/getMethod";
import React from "react";

export default async function Actitvity() {
  const data = await getMehod("/activity?limit=3",['client'])

  const tempData:{activity:string,time:string,id:number}[] = data?.length?data:[]

  const shows = tempData?.map((item,index)=>(
    <Item data={item} key={index} />
  ))
  return (
    <div className="relative mt-2 2 px-4 space-y-6 ">
      <div className="col-span-12 space-y-2 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-[#FF4B5C]">
     {shows}
      </div>
    </div>
  );
}

function Item({data}:{data:{activity:string,time:string}}) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00C9FF]">
      <h3 className="text-sm font-semibold text-gray-400 tracking-wide">
        {data.activity}
      </h3>
      <time className="text-xs tracking-wide uppercase text-gray-400">
        {data.time} 
      </time>
    </div>
  );
}
