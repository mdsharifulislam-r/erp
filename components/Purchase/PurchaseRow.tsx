'use client'
import { AccountType, ClientType, ProductType, PurchaseType } from "@/types/types"
import DeleteConfirmation from "../Common/DeletePopUp/DeletePop"
import { otherMethod } from "@/lib/helper/postMethod"
import Image from "next/image"
import { TdStyle } from "../Account/AccoutTable"


export default function PurchaseRow({data}:{data:PurchaseType,}){
   
  
      return (
          <tr>
          <td className={TdStyle.TdStyle}>
            {data.supplier}
          </td>
          <td className={TdStyle.TdStyle}>{data?.product_name}</td>
          <td className={TdStyle.TdStyle}>{data.paid_account}</td>
          <td className={TdStyle.TdStyle}>{data.total_amount}</td>
          <td className={TdStyle.TdStyle}>{data.transaction_id}</td>
            <td className={TdStyle.TdStyle}>{data.paid}</td>
            <td className={TdStyle.TdStyle}>{data.date}</td>
      
        </tr>
      )
  }
  