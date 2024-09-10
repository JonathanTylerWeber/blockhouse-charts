import BarChartData from "@/data/barChartData";
import CandlestickChartData from "@/data/candlestickChartData";
import CandlestickDataPoint from "@/data/candlestickDataPoint";
import ChartData from "@/data/chartDataRes";
import LineChartData from "@/data/lineChartData";
import PieChartData from "@/data/pieChartData";

import LineChartComp from "@/components/LineChartComp";

async function fetchChartData(): Promise<ChartData> {
  try {
    const [candlestickRes, lineRes, barRes, pieRes] = await Promise.all([
      fetch('http://127.0.0.1:8000/api/candlestick-data/'),
      fetch('http://127.0.0.1:8000/api/line-chart-data/'),
      fetch('http://127.0.0.1:8000/api/bar-chart-data/'),
      fetch('http://127.0.0.1:8000/api/pie-chart-data/'),
    ]);

    if (!candlestickRes.ok || !lineRes.ok || !barRes.ok || !pieRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const [candlestickData, lineData, barData, pieData] = await Promise.all([
      candlestickRes.json(),
      lineRes.json(),
      barRes.json(),
      pieRes.json(),
    ]);

    return {
      candlestick: candlestickData as CandlestickChartData,
      line: lineData as LineChartData,
      bar: barData as BarChartData,
      pie: pieData as PieChartData,
    };
  } catch (error) {
    console.error(error);
    return {
      candlestick: { data: [] },
      line: { labels: [], data: [] },
      bar: { labels: [], data: [] },
      pie: { labels: [], data: [] },
    };
  }
}

export default async function Page() {

  const chartData: ChartData = await fetchChartData();
  const candlestickData: CandlestickDataPoint[] = chartData.candlestick.data;
  const lineData: LineChartData = chartData.line;
  const barData: BarChartData = chartData.bar;
  const pieData: PieChartData = chartData.pie;

  console.log('candlestick', candlestickData);
  console.log('line', lineData);
  console.log('bar', barData);
  console.log('pie', pieData);

  return (
    <>
      <LineChartComp lineData={lineData} />
    </>
  )
}