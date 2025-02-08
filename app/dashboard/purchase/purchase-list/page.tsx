import PurchaseList from '@/components/Purchase/PurchaseList'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <div>

      <Suspense fallback={<div>Loading...</div>}>
      <PurchaseList/>
      </Suspense>
    </div>
  )
}
