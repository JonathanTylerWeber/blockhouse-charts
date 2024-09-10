import CandlestickChart from '@/components/CandleChartComp';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Page() {

  const candleData = useSelector((state: RootState) => state.candlestick.data);

  return (
    <CandlestickChart candlestickData={candleData} />
  )
}