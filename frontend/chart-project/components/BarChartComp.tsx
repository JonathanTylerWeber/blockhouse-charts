"use client"

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
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const BarChartComp: React.FC<BarChartProps> = ({ barData }) => {

  const transformedData = barData.labels.map((label, index) => ({
    labels: label,
    Data: barData.data[index],
  }));

  return (
    <Card className="w-96 h-96 bg-gray-800 text-white border-none text-center">
      <CardHeader>
        <CardTitle><b>Bar Chart</b></CardTitle>
      </CardHeader>
      <CardContent className=" mr-3 md:mr-10 p-2 pb-6 pt-10">
        <ChartContainer config={chartConfig} >
          <BarChart accessibilityLayer data={transformedData}>
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