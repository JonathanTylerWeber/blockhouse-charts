'use client'

import BarChartComp from '@/components/BarChartComp';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Page() {

  const barData = useSelector((state: RootState) => state.bar.data);

  return (
    <div className="flex justify-center items-center m-10">
      <BarChartComp barData={barData} width={800} height={600} />
    </div>
  )
}