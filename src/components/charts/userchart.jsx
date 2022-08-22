import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Userchart = () => {

        return (
          <div className="chart">
            <h1 className="title">User Activity</h1>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
          
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#7451f8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
          
          </div>
        );
      }
export default Userchart