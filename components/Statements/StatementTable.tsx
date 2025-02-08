import { getMehod } from "@/lib/helper/getMethod";
import { StatementType } from "@/types/types";
import { TdStyle } from "../Account/AccoutTable";
import { useEffect, useState } from "react";
import TableRow from "./StatementRow";
import { useSearchParams } from "next/navigation";


const StatementTable = () => {

    const [data,setData] = useState<StatementType[]>([])
    const searchParams = useSearchParams()
    const limit = searchParams.get('limit')
    const transiction_type= searchParams.get('transiction_type')
    console.log(transiction_type)
    const account_type= searchParams.get('account_type')
    const range = limit?parseInt(limit):1
    const datalimit= `${10*(range-1)}-${10*range}`
    useEffect(()=>{
        const fetchData = async () => {
          const result = await getMehod(`/statement?limit=${datalimit}&account_type=${account_type||""}&transiction_type=${transiction_type||""}`, ['account'])
          setData(result)
        }
        fetchData()
  
    },[limit,searchParams])

    const shows = data?.map((item,index)=>(
        <TableRow data={item} key={index}/>
    ))

  return (
        <div className='flex flex-wrap mt-5'>
          <div className='w-full  '>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto rounded-md overflow-hidden'>
                <thead className='text-center bg-primary rounded-md'>
                  <tr>
                    <th className={TdStyle.ThStyle}>Payment Type</th>
                    <th className={TdStyle.ThStyle}> Balance </th>
                    <th className={TdStyle.ThStyle}> Transaction Type</th>
                    <th className={TdStyle.ThStyle}> transaction_id</th>
                    <th className={TdStyle.ThStyle}> Credit </th>
                    <th className={TdStyle.ThStyle}> Debit </th>
                    <th className={TdStyle.ThStyle}> Date </th>
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

export default StatementTable;