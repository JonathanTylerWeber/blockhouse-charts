import BarChartComp from '@/components/BarChartComp';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Page() {

  const barData = useSelector((state: RootState) => state.bar.data);

  return (
    <BarChartComp barData={barData} />
  )
}