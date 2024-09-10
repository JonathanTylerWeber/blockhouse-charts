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
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig



const LineChartComp: React.FC<LineChartProps> = ({ lineData }) => {

  const transformedData = lineData.labels.map((label, index) => ({
    month: label,
    Amount: lineData.data[index]
  }));

  return (
    <>
      <Card className="w-96 h-96 bg-gray-800 text-white border-none text-center ">
        <CardHeader>
          <CardTitle><b>Line Chart</b></CardTitle>
          <CardDescription className="text-white">January - April</CardDescription>
        </CardHeader>
        <CardContent className="mr-6 md:mr-10 p-6 pb-6  ">
          <ChartContainer config={chartConfig} >
            <LineChart
              accessibilityLayer
              data={transformedData}
              margin={{
                left: 12,
                right: 16,
                top: 12,
                bottom: 12
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                dataKey="Amount"
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent
                  className="bg-black "
                />}
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
    </>
  )
}

export default LineChartComp;