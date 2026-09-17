"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HOURS = 730;

/** Published unit rates as of 17 Sep 2026. See chart caption for sources. */
const MODAL_SANDBOX_HR =
  2 * 0.00003942 * 3600 + 4 * 0.00000667 * 3600; // 2 vCPU + 4 GiB
const E2B_HR = 2 * 0.000014 * 3600 + 4 * 0.0000045 * 3600;
const NORTHFLANK_HR = 2 * 0.01667 + 4 * 0.00833;
const PYSMITH_MEDIUM_HR = 0.08;

function monthly(hourly: number, duty: number) {
  return Number((hourly * HOURS * duty).toFixed(2));
}

const data = [0.1, 0.25, 0.5, 1].map((duty) => ({
  name: `${Math.round(duty * 100)}%`,
  Modal: monthly(MODAL_SANDBOX_HR, duty),
  E2B: monthly(E2B_HR, duty),
  Northflank: monthly(NORTHFLANK_HR, duty),
  PySmith: monthly(PYSMITH_MEDIUM_HR, 1),
}));

export function DutyCycleChart() {
  return (
    <div
      className="ps-chart"
      role="img"
      aria-label="Line chart of monthly cost against duty cycle for Modal, E2B, Northflank and PySmith"
    >
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#EFEFEA" />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={{ stroke: "#E2E2DD" }}
            label={{
              value: "Duty cycle (share of the month the process is running)",
              position: "insideBottom",
              offset: -2,
              style: { fontSize: 11, fill: "#8A9099" },
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={{ stroke: "#E2E2DD" }}
            tickFormatter={(value: number) => `$${value}`}
          />
          <Tooltip
            formatter={(value) => {
              const amount = typeof value === "number" ? value : Number(value);
              return [`US$${amount.toFixed(2)} / mo`, undefined];
            }}
            contentStyle={{
              border: "1px solid #E2E2DD",
              fontFamily: "IBM Plex Sans, sans-serif",
              fontSize: 13,
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="Modal" stroke="#16181C" strokeWidth={1.8} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="E2B" stroke="#1B4DE4" strokeWidth={1.8} dot={{ r: 3 }} />
          <Line
            type="monotone"
            dataKey="Northflank"
            stroke="#C2681C"
            strokeWidth={1.8}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="PySmith"
            stroke="#0E2247"
            strokeWidth={2}
            strokeDasharray="6 4"
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
