"use client";

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Bounce Rate", value: 68, fill: "#8A2BE2" },
  { name: "Returning User", value: 75, fill: "#00FF7F" },
  { name: "New User", value: 75, fill: "#FFD700" },
];

export default function TotalVendorChart() {
  return (
    <div className="bg-[#2A2F45] p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-white mb-4">
        Total Vendor <span className="text-green-400">▲ 22% Higher</span>
      </h2>
      <ResponsiveContainer width="100%" height={180}>
        <RadialBarChart
          innerRadius="20%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar  background dataKey="value" />
          <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
