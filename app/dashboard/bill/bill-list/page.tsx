import BillList from '@/components/Bill/BillList'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>

      <BillList/>
        </Suspense>
    </div>
  )
}
