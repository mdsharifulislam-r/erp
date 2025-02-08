import StatementContainer from '@/components/Statements/StatementContainer'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <div className='mt-5'>
      <Suspense fallback={<div>Loading...</div>}>
       <StatementContainer/>
      </Suspense>
    
    </div>
  )
}
