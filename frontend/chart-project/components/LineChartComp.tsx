'use client'

import LineChartData from "@/data/lineChartData";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface LineChartProps {
  lineData: LineChartData;
  width?: number;
  height?: number;
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const LineChartComp: React.FC<LineChartProps> = ({ lineData, width = 500, height = 400 }) => {

  const transformedData = lineData.labels.map((label, index) => ({
    month: label,
    Amount: lineData.data[index]
  }));

  return (
    <Card
      className="flex flex-col bg-gray-800 text-white border-none text-center "
      style={{ width, height }}
    >
      <CardHeader>
        <CardTitle><b>Line Chart</b></CardTitle>
      </CardHeader>
      <CardContent className="flex-1 md:py-4 md:px-6 md:pr-16 pr-10 pb-10 pl-0 flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="relative flex-1"
          style={{ width: '100%', height: '100%' }}
        >
          <LineChart
            data={transformedData}
            margin={{
              left: 12,
              right: 16,
              top: 12,
              bottom: 12
            }}
            width={width}
            height={height}
            className="absolute top-0 left-0 w-full h-full"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis dataKey="Amount" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-black" />}
            />
            <Line
              dataKey="Amount"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default LineChartComp;
