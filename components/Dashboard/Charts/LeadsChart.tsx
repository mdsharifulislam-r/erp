"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 60 },
  { name: "Mar", value: 55 },
  { name: "Apr", value: 80 },
  { name: "May", value: 45 },
  { name: "Jun", value: 70 },
];

export default function TotalLeadsChart() {
  return (
    <div className="bg-secondary p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-white mb-4">Total Leads</h2>
      <p className="text-sm text-gray-400 mb-2">Overall Growth: <span className="text-green-400 font-bold">79.10%</span></p>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00C9FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00C9FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#00C9FF" fillOpacity={1} fill="url(#colorBlue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
