'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
import BarChartData from "@/data/barChartData"

interface BarChartProps {
  barData: BarChartData;
  width?: number;
  height?: number;
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const BarChartComp: React.FC<BarChartProps> = ({ barData, width = 500, height = 400 }) => {

  const transformedData = barData.labels.map((label, index) => ({
    labels: label,
    Data: barData.data[index],
  }));

  return (
    <Card
      className="bg-gray-800 text-white border-none text-center rounded-lg "
      style={{ width, height }}
    >
      <CardHeader>
        <CardTitle className="text-center"><b>Bar Chart</b></CardTitle>
      </CardHeader>
      <CardContent className="md:p-10 p-0 flex-1 sm:mt-0 mt-16">
        <ChartContainer
          config={chartConfig}
          className="relative"
        >
          <BarChart
            accessibilityLayer
            data={transformedData}
            margin={{ top: 5, right: 25, bottom: 5, left: 0 }}

          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="labels"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              dataKey="Data"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-black" />}
            />
            <Bar dataKey="Data" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default BarChartComp;
