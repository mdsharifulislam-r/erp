import { getMehod } from "@/lib/helper/getMethod";
import { AccountType, ClientType, ProductType } from "@/types/types";
import React from "react";

import DeleteConfirmation from "../Common/DeletePopUp/DeletePop";
import { otherMethod } from "@/lib/helper/postMethod";
import { TdStyle } from "../Account/AccoutTable";
import ProductRow from "./ProductRow";



const ProductTable = async () => {

    const data:ProductType[] = await getMehod("/product",['product'])

    const shows = data?.map((item,index)=>(
        <ProductRow data={item} key={index}/>
    ))
  return (
        <div className='flex flex-wrap mt-5'>
          <div className='w-full  '>
            <div className='max-w-full overflow-x-auto'>
              <table className='w-full table-auto rounded-md overflow-hidden'>
                <thead className='text-center bg-primary rounded-md'>
                  <tr>
                    <th className={TdStyle.ThStyle}>Name</th>
                    <th className={TdStyle.ThStyle}> In Stocks </th>
                    <th className={TdStyle.ThStyle}> Sale Price</th>
                    <th className={TdStyle.ThStyle}> Buy Price</th>
                    <th className={TdStyle.ThStyle}> Unit </th>
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

export default ProductTable;


