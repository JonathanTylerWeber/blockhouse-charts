'use client'

import LineChartComp from '@/components/LineChartComp';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Page() {

  const lineData = useSelector((state: RootState) => state.line.data);

  return (
    <div className="flex justify-center items-center m-10">
      <LineChartComp lineData={lineData} width={800} height={600} />
    </div>
  )
}