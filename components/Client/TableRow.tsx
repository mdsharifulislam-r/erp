'use client'
import { ClientType } from "@/types/types"
import DeleteConfirmation from "../Common/DeletePopUp/DeletePop"
import { otherMethod } from "@/lib/helper/postMethod"
import Image from "next/image"

export default function TableRow({data,TdStyle}:{data:ClientType,TdStyle:any}){
    "use client"
      async function deleteClient(){
        
        const dat = await otherMethod({
          url: `/client/${data.client_id}`,
          method: 'DELETE',
        validationTag:"client"
        })
      }
      return (
          <tr>
          <td className={TdStyle.TdStyle}>
            <Image src={data.image||"/image/avtar.png"} alt="" width={50} height={50}  className=" w-10 h-10 mx-auto object-cover rounded-full"/>
          </td>
          <td className={TdStyle.TdStyle}>{data?.name}</td>
          <td className={TdStyle.TdStyle}>{data?.email}</td>
          <td className={TdStyle.TdStyle}>{data.contact_number}</td>
          <td className={TdStyle.TdStyle}>{data.address}</td>
          <td className={TdStyle.TdStyle}>{data.company}</td>
          <td className={TdStyle.TdStyle}>{data.reference}</td>
          <td className={'text-gray-400 border-b shadow-lg z-0 border-gray-400 bg-secondary dark:border-dark dark:bg-dark-2  py-5 px-2 text-center text-base font-medium sticky top-0 right-0'}>
            <DeleteConfirmation
            onDelete={deleteClient}
            />
          </td>
        </tr>
      )
  }
  