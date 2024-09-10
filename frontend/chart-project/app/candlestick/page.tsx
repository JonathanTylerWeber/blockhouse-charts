'use client'

import CandlestickChart from '@/components/CandleChartComp';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Page() {

  const candleData = useSelector((state: RootState) => state.candlestick.data);

  return (
    <div className="flex justify-center items-center m-10">
      <CandlestickChart candlestickData={candleData} width={800} height={600} />
    </div>
  )
}