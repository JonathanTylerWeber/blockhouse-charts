import PieChartComp from "@/components/PieChartComp";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";

export default function Page() {

  const pieData = useSelector((state: RootState) => state.pie.data);

  return (
    <PieChartComp pieData={pieData} />
  )
}