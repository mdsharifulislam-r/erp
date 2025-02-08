import { getMehod } from "@/lib/helper/getMethod";
import { AccountType, ClientType } from "@/types/types";
import React from "react";

import DeleteConfirmation from "../Common/DeletePopUp/DeletePop";
import { otherMethod } from "@/lib/helper/postMethod";
import TableRow from "./TableRow";


export const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b  border-gray bg-secondary dark:bg-dark-3 dark:border-dark text-gray-400 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}

const AccountTable = async () => {

    const data:AccountType[] = await getMehod("/account",['account'])
    const shows = data?.map((item,index)=>(
        <TableRow TdStyle={TdStyle} data={item} key={index}/>
    ))

  return (
        <div className='flex flex-wrap mt-5'>
          <div className='w-full  '>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto rounded-md overflow-hidden'>
                <thead className='text-center bg-primary rounded-md'>
                  <tr>
                    <th className={TdStyle.ThStyle}>Number</th>
                    <th className={TdStyle.ThStyle}> Name </th>
                    <th className={TdStyle.ThStyle}> Balance</th>
                    <th className={TdStyle.ThStyle}> Status</th>
                    <th className={TdStyle.ThStyle}> Date </th>
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

export default AccountTable;


