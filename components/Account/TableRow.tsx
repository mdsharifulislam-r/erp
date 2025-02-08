'use client'
import { AccountType, ClientType } from "@/types/types"
import DeleteConfirmation from "../Common/DeletePopUp/DeletePop"
import { otherMethod } from "@/lib/helper/postMethod"
import Image from "next/image"
import DropDown from "./DropDown"

export default function TableRow({data,TdStyle}:{data:AccountType,TdStyle:any}){
   
  
      return (
          <tr>
          <td className={TdStyle.TdStyle}>
            {data.account_number}
          </td>
          <td className={TdStyle.TdStyle}>{data?.account_type}</td>
          <td className={TdStyle.TdStyle}>{data.balance}</td>
          <td className={TdStyle.TdStyle}>{data.status}</td>
          <td className={TdStyle.TdStyle}>{data.creation_date}</td>
          <td className={'text-gray-400 border-b shadow-lg z-0 border-gray-400 bg-secondary dark:border-dark dark:bg-dark-2  py-5 px-2 text-center text-base font-medium '}>
            <DropDown/>
          </td>
        </tr>
      )
  }
  