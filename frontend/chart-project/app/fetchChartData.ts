import { AppDispatch } from './redux/store';
import { setCandlestickData } from './redux/slices/candleSlice';
import { setLineData } from './redux/slices/lineSlice';
import { setBarData } from './redux/slices/barSlice';
import { setPieData } from './redux/slices/pieSlice';
import CandlestickChartData from '@/data/candlestickChartData';
import LineChartData from '@/data/lineChartData';
import BarChartData from '@/data/barChartData';
import PieChartData from '@/data/pieChartData';

export async function fetchChartData(dispatch: AppDispatch) {
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

    dispatch(setCandlestickData(candlestickData as CandlestickChartData));
    dispatch(setLineData(lineData as LineChartData));
    dispatch(setBarData(barData as BarChartData));
    dispatch(setPieData(pieData as PieChartData));
  } catch (error) {
    console.error(error);
  }
}
