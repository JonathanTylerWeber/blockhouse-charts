'use client'

import PieChartComp from "@/components/PieChartComp";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Page() {

  const pieData = useSelector((state: RootState) => state.pie.data);

  return (
    <div className="flex justify-center items-center m-10">
      <PieChartComp pieData={pieData} width={800} height={600} />
    </div>
  )
}