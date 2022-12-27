import React, { FC } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  startDate: Date;
  endDate: Date;
}

export const data = [
  {
    date: '2022-11-26',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '2022-12-27',
    uv: 30,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '2022-12-28',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '2022-12-29',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '2022-12-30',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: '2023-01-27',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: '2023-01-29',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const isInDateInterval = (start: Date, end: Date, myDate: Date): boolean => myDate > start && myDate < end;

export const Graf1: FC<Props> = props => {
  const dataInterval = data.filter(d => isInDateInterval(props.startDate, props.endDate, new Date(d.date)));
  return (
    <BarChart
      width={500}
      height={300}
      data={dataInterval}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default Graf1;
