"use client"

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

const PieChartComp: React.FC<PieChartProps> = ({ pieData }) => {

  const transformedData = pieData.labels.map((label, index) => {
    const color = chartConfig[label.toLowerCase()]?.color || "var(--color-desktop)";
    return {
      name: label,
      value: pieData.data[index],
      color,
    };
  });

  return (
    <Card className="flex flex-col w-96  h-96 bg-gray-800 text-white border-none text-center ">
      <CardHeader className="items-center pb-0">
        <CardTitle><b>Pie Chart</b></CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex items-center min-h-[250px]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[250px]"
        >
          <PieChart>
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
              outerRadius={100}
            >
              {transformedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </ Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default PieChartComp;
