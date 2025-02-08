"use client";

import { getMehod } from '@/lib/helper/getMethod';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



export default function SalesChart() {
const [data,setData] = useState([])
useEffect(()=>{
  getMehod(
    '/details/revenue',
    ['revenue','name']
  ).then(
    res=>setData(res)
  )
},[])
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="ravinue" stroke="#ff4b5c" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
