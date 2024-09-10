'use client'

import { Cell, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import PieChartData from "@/data/pieChartData";

interface PieChartProps {
  pieData: PieChartData;
  width?: number;
  height?: number;
}

const chartConfig: ChartConfig = {
  red: {
    label: "red",
    color: "#ef5350",
  },
  yellow: {
    label: "yellow",
    color: "#ffee58",
  },
  blue: {
    label: "blue",
    color: "#42a5f5",
  },
  other: {
    label: "Other",
    color: "#66bb6a",
  },
} satisfies ChartConfig

const PieChartComp: React.FC<PieChartProps> = ({ pieData, width = 500, height = 400 }) => {

  const transformedData = pieData.labels.map((label, index) => {
    const color = chartConfig[label.toLowerCase()]?.color || "var(--color-desktop)";
    return {
      name: label,
      value: pieData.data[index],
      color,
    };
  });

  return (
    <Card className="flex flex-col bg-gray-800 text-white border-none text-center" style={{ width, height }}>
      <CardHeader className="items-center pb-0">
        <CardTitle><b>Pie Chart</b></CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="relative flex-1"
          style={{ width: '100%', height: '100%' }}
        >
          <PieChart
            width={width}
            height={height}
            className="absolute top-0 left-0 w-full h-full"
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-black" />}
            />
            <Pie
              data={transformedData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="80%"
            >
              {transformedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default PieChartComp;
