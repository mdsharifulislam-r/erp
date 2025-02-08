import { getMehod } from "@/lib/helper/getMethod";
import { ClientType } from "@/types/types";
import React from "react";
import { DropMenu } from "./DropMenu";
import DeleteConfirmation from "../Common/DeletePopUp/DeletePop";
import { otherMethod } from "@/lib/helper/postMethod";
import TableRow from "./TableRow";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b  border-gray bg-secondary dark:bg-dark-3 dark:border-dark text-gray-400 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}

const ClientTable = async ({type="client"}:{type?:string}) => {
    const data:ClientType[] = await getMehod(`/client?status=${type}`,['client'])
    const shows = data?.map((item,index)=>(
        <TableRow TdStyle={TdStyle} data={item} key={index}/>
    ))
    

  return (
        <div className='flex flex-wrap '>
          <div className='w-full pb-7 '>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto rounded-md overflow-hidden'>
                <thead className='text-center bg-primary rounded-md'>
                  <tr>
                    <th className={TdStyle.ThStyle}>Image</th>
                    <th className={TdStyle.ThStyle}> Name </th>
                    <th className={TdStyle.ThStyle}> Email </th>
                    <th className={TdStyle.ThStyle}> Phone</th>
                    <th className={TdStyle.ThStyle}> Address </th>
                    <th className={TdStyle.ThStyle}> Comapmny </th>
                    <th className={TdStyle.ThStyle}> Reference </th>
                    <th className={TdStyle.ThStyle}> Action </th>
                    
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

export default ClientTable;


