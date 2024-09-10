import LineChartComp from '@/components/LineChartComp';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Page() {

  const lineData = useSelector((state: RootState) => state.line.data);

  return (
    <LineChartComp lineData={lineData} />
  )
}