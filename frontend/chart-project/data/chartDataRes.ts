import BarChartData from "./barChartData";
import CandlestickChartData from "./candlestickChartData";
import LineChartData from "./lineChartData";
import PieChartData from "./pieChartData";

export default interface ChartData {
  candlestick: CandlestickChartData;
  line: LineChartData;
  bar: BarChartData;
  pie: PieChartData;
}