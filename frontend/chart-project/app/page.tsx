'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { fetchChartData } from './fetchChartData';
import LineChartComp from '@/components/LineChartComp';
import BarChartComp from '@/components/BarChartComp';
import PieChartComp from '@/components/PieChartComp';
import CandleChartComp from '@/components/CandleChartComp';

export default function Page() {
  const dispatch = useDispatch();
  const candlestickData = useSelector((state: RootState) => state.candlestick.data);
  const lineData = useSelector((state: RootState) => state.line.data);
  const barData = useSelector((state: RootState) => state.bar.data);
  const pieData = useSelector((state: RootState) => state.pie.data);

  useEffect(() => {
    fetchChartData(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center mb-10">
          <CandleChartComp candlestickData={candlestickData} />
        </div>
        <div className="flex justify-center items-center mb-10">
          <LineChartComp lineData={lineData} />
        </div>
        <div className="flex justify-center items-center mb-10">
          <BarChartComp barData={barData} />
        </div>
        <div className="flex justify-center items-center mb-10">
          <PieChartComp pieData={pieData} />
        </div>
      </div>
    </>
  );
}
