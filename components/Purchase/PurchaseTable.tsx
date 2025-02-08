'use client'
import { getMehod } from "@/lib/helper/getMethod";
import { AccountType, ClientType, ProductType, PurchaseType } from "@/types/types";
import React, { useEffect, useState } from "react";

import DeleteConfirmation from "../Common/DeletePopUp/DeletePop";
import { otherMethod } from "@/lib/helper/postMethod";
import { TdStyle } from "../Account/AccoutTable";
import PurchaseRow from "./PurchaseRow";
import { useSearchParams } from "next/navigation";




const PurchaseTable =  () => {
  const searchParams= useSearchParams()
    const limit = searchParams.get('limit')
   const range = limit?parseInt(limit):1
    const datalimit= `${10*(range-1)}-${10*range}`
    const [data,setData] = useState<PurchaseType[]>([]) 
    const fetchData = async () => {
      const result = await getMehod(`/purchase?limit=${datalimit}`, ['supplier','product','account'])
      setData(result)
    }

    useEffect(()=>{fetchData()},[limit,searchParams])

    const shows = data?.map((item,index)=>(
        <PurchaseRow data={item} key={index}/>
    ))
    
  return (
        <div className='flex flex-wrap mt-5'>
          <div className='w-full  '>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto rounded-md overflow-hidden'>
                <thead className='text-center bg-primary rounded-md'>
                  <tr>
                    <th className={TdStyle.ThStyle}>Supplier</th>
                    <th className={TdStyle.ThStyle}> Product </th>
                    <th className={TdStyle.ThStyle}>Account</th>
                    <th className={TdStyle.ThStyle}>Amount</th>
                    <th className={TdStyle.ThStyle}>transaction_id</th>
                    <th className={TdStyle.ThStyle}>Paid</th>
                    <th className={TdStyle.ThStyle}>Date</th>
                  </tr>
                </thead>

                <tbody>
                    {shows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
     
 
  )
};

export default PurchaseTable;


