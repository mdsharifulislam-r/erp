import PurchaseList from '@/components/Purchase/PurchaseList'
import SaleList from '@/components/Sale/SaleList'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>

      <SaleList/>
        </Suspense>
    </div>
  )
}
