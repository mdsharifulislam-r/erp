'use client'
import { AccountType, ClientType, StatementType } from "@/types/types"
import DeleteConfirmation from "../Common/DeletePopUp/DeletePop"
import { otherMethod } from "@/lib/helper/postMethod"
import Image from "next/image"
import { TdStyle } from "../Account/AccoutTable"


export default function TableRow({data}:{data:StatementType}){
   
  
      return (
          <tr>
          <td className={TdStyle.TdStyle}>
            {data.payment_type}
          </td>
          <td className={TdStyle.TdStyle}>{data?.balance}</td>
          <td className={TdStyle.TdStyle}>
            <span className={`p-2 text-white ${data.transaction_type=="purchess"||data.transaction_type=="bill"?"bg-red-500":"bg-emerald-500"}`}>
                {data.transaction_type}
            </span>
          </td>
          <td className={TdStyle.TdStyle}>{data.transaction_id}</td>
          <td className={TdStyle.TdStyle}>{data.credit}</td>
          <td className={TdStyle.TdStyle}>{data.debit}</td>
          <td className={TdStyle.TdStyle}>
            <span className="block">{data.date}</span>
            <span>{data.time}</span>
          </td>

         
        </tr>
      )
  }
  