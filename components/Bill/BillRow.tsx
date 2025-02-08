'use client'

import { BillType } from "@/types/types"
import { TdStyle } from "../Account/AccoutTable"


export default function BillRow({data}:{data:BillType,}){
   
  
      return (
          <tr>
          <td className={TdStyle.TdStyle}>
            {data.name}
          </td>
          <td className={TdStyle.TdStyle}>{data?.amount}</td>
          <td className={TdStyle.TdStyle}>{data.method}</td>
          <td className={TdStyle.TdStyle}>{data.date}</td>
    
      
        </tr>
      )
  }
  