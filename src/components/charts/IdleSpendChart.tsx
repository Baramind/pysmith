"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HOURS = 730;
const T3_MEDIUM_HOURLY = 0.0418;
const MONTHLY = T3_MEDIUM_HOURLY * HOURS;

const data = [
  {
    name: "20% used",
    useful: Number((MONTHLY * 0.2).toFixed(2)),
    idle: Number((MONTHLY * 0.8).toFixed(2)),
  },
  {
    name: "40% used",
    useful: Number((MONTHLY * 0.4).toFixed(2)),
    idle: Number((MONTHLY * 0.6).toFixed(2)),
  },
  {
    name: "80% used",
    useful: Number((MONTHLY * 0.8).toFixed(2)),
    idle: Number((MONTHLY * 0.2).toFixed(2)),
  },
];

export function IdleSpendChart() {
  return (
    <div className="ps-chart" role="img" aria-label="Stacked bars of useful versus idle spend on an always-on t3.medium">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#EFEFEA" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={{ stroke: "#E2E2DD" }} />
          <YAxis
            tickLine={false}
            axisLine={{ stroke: "#E2E2DD" }}
            tickFormatter={(value: number) => `$${value}`}
          />
          <Tooltip
            formatter={(value) => {
              const amount = typeof value === "number" ? value : Number(value);
              return [`$${amount.toFixed(2)}`, undefined];
            }}
            contentStyle={{
              border: "1px solid #E2E2DD",
              fontFamily: "IBM Plex Sans, sans-serif",
              fontSize: 13,
            }}
          />
          <Legend />
          <Bar dataKey="useful" name="Useful (at stated utilisation)" stackId="a" fill="#1B4DE4" />
          <Bar dataKey="idle" name="Idle (paid, unused)" stackId="a" fill="#C2681C" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
