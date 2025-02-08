'use client'
import { AccountType, ClientType, ProductType } from "@/types/types"
import DeleteConfirmation from "../Common/DeletePopUp/DeletePop"
import { otherMethod } from "@/lib/helper/postMethod"
import Image from "next/image"
import { TdStyle } from "../Account/AccoutTable"


export default function ProductRow({data}:{data:ProductType,}){
   
  
      return (
          <tr>
          <td className={TdStyle.TdStyle}>
            {data.product_name}
          </td>
          <td className={TdStyle.TdStyle}>{data?.stock}</td>
          <td className={TdStyle.TdStyle}>{data.sell_price}</td>
          <td className={TdStyle.TdStyle}>{data.buy_price}</td>
          <td className={TdStyle.TdStyle}>{data.unit}</td>
      
        </tr>
      )
  }
  