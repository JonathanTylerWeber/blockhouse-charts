// components/CandlestickChart.tsx
'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import CandlestickChartData from '@/data/candlestickChartData';
import CandlestickDataPoint from '@/data/candlestickDataPoint';

interface CandlestickChartProps {
  candlestickData: CandlestickChartData;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ candlestickData }) => {
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
    <div className="w-96 pt-4 h-96 bg-gray-800 text-white border-none text-center rounded-lg ">
      <h1 className="text-white font-bold mb-4">Candlestick Chart</h1>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default CandlestickChart;
