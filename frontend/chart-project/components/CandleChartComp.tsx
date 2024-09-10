'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import CandlestickChartData from '@/data/candlestickChartData';
import CandlestickDataPoint from '@/data/candlestickDataPoint';

interface CandlestickChartProps {
  candlestickData: CandlestickChartData;
  width?: number;
  height?: number;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ candlestickData, width = 500, height = 400 }) => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: candlestickData.data.map((item) => item.x),
      axisLabel: {
        rotate: 45,
        color: '#ffffff',
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#ffffff',
      },
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
      splitLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
    },
    series: [
      {
        name: 'Candlestick',
        type: 'candlestick',
        data: candlestickData.data.map((item) => [
          item.open,
          item.close,
          item.low,
          item.high,
        ]),
        itemStyle: {
          color: '#66bb6a',
          color0: '#ef5350',
          borderColor: '#66bb6a',
          borderColor0: '#ef5350',
        },
      },
    ],
  };

  return (
    <div
      className="bg-gray-800 text-white border-none text-center rounded-lg"
      style={{ width, height }}
    >
      <h1 className="text-white font-bold my-4">Candlestick Chart</h1>
      <ReactECharts
        option={option}
        style={{ width: '100%', height: 'calc(100% - 2.5rem)' }} // Adjust height to account for the title and padding
      />
    </div>
  );
};

export default CandlestickChart;