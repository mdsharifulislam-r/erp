"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Feb', increase: 80, decrease: 40 },
  { name: 'Mar', increase: 90, decrease: 50 },
  { name: 'Apr', increase: 75, decrease: 45 },
  { name: 'May', increase: 100, decrease: 60 },
  { name: 'Jun', increase: 110, decrease: 65 },
  { name: 'Jul', increase: 120, decrease: 70 },
];


export default function ParchessReviewChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="increase" fill="#00C9FF" />
        <Bar dataKey="decrease" fill="#FF4B5C" />
      </BarChart>
    </ResponsiveContainer>
  );
}
