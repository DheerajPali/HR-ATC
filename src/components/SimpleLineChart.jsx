import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan-25",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb-25",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar-25",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr-25",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May-25",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June-25",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July-25",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug-25",
    uv: 3490,
    pv: 4300,
    amt: 1900,
  },
  {
    name: "Sep-25",
    uv: 4490,
    pv: 6000,
    amt: 3900,
  },
  {
    name: "Oct-25",
    uv: 6490,
    pv: 7300,
    amt: 2500,
  },
  {
    name: "Nov-25",
    uv: 3490,
    pv: 4300,
    amt: 1500,
  },
  {
    name: "Dec-25",
    uv: 3890,
    pv: 4700,
    amt: 1800,
  },
];
const tabs = ["My Account", "Company", "Team Members", "Billing"];
export default function SimpleLineChart() {
  const [activeTab, setActiveTab] = useState("My Account");
  return (
    <div className="p-4 rounded-lg border border-gray-200 w-full shadow-md">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Candiates Reports</h2>
        <div className="">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 border border-transparent
                        ${
                          activeTab === tab
                            ? "text-gray-900 border border-gray-400"
                            : "text-gray-900 hover:border hover:border-gray-400"
                        }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="">
            <p className="text-sm text-gray-700"></p>
          </div>
        </div>
        <div className="">
          <a
            href=""
            className="border border-gray-400 font-semibold text-slate-950 py-2 px-4 rounded-md flex items-center hover:bg-white"
          >
            <i className="mr-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Icon"
                  d="M8 6.33332V9.96968M8 9.96968L5.99999 8.1515M8 9.96968L10 8.1515M11.3333 13H4.66666C3.93028 13 3.33333 12.4573 3.33333 11.7879V3.30302C3.33333 2.63358 3.93028 2.0909 4.66666 2.0909H8.39052C8.56733 2.0909 8.7369 2.15475 8.86192 2.26841L12.4714 5.54975C12.5964 5.66341 12.6667 5.81756 12.6667 5.9783V11.7879C12.6667 12.4573 12.0697 13 11.3333 13Z"
                  stroke="#18181B"
                />
              </svg>
            </i>
            Export PDF
          </a>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={2.3}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#7f22fe"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
