"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { getGrafikSensor } from "@/services/sensor"

export const description = "An interactive area chart"

const parameterColors: Record<string, string> = {
  kelembaban: "#3b82f6",
  pHtanah: "#22c55e",
  suhu: "#fc6603",
  nitrogen: "#9003fc",
  fosfor: "#fcc603",
  kalium: "#03adfc",
  ec: "#fc035e",
}

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  kelembaban: {
    label: "Kelembaban",
  },
  pHtanah: {
    label: "pH Tanah",
  },
  suhu: {
    label: "Suhu Tanah",
  },
  nitrogen: {
    label: "Nitrogen",
  },
  fosfor: {
    label: "Fosfor",
  },
  kalium: {
    label: "Kalium",
  },
  ec: {
    label: "Electrical Conductivity",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [chartData, setChartData] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function loadData() {
      try {
        const res = await getGrafikSensor();

        const grafik = res.map((item: any) => ({
          date: new Date(item.tanggal).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "short",
          }),
          kelembaban: item.kelembaban,
          pHtanah: item.pH_Tanah,
          suhu: item.suhuTanah,
          nitrogen: item.nitrogen,
          fosfor: item.fosfor,
          kalium: item.kalium,
          ec: item.ec,
        }))
        setChartData(grafik)
      } catch (err) {
        console.log(err);
      }
    }

    loadData();
  }, []);

  const parameterKeys =
    chartData.length > 0
      ? Object.keys(chartData[0]).filter((key) => key !== "date")
      : []

  return (
      <Card className="@container/card h-full">
        <CardHeader>
          <CardTitle>Tren Kondisi Tanah</CardTitle>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-62.5 w-full"
          >
            <LineChart data={chartData}>
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={1.0}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent indicator="dot"/>
                }
              />
              {parameterKeys.map((chart) => (
                <Line
                  key={chart}
                  dataKey={`${chart}`}
                  type="natural"
                  stroke={parameterColors[chart]}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
  )
}
