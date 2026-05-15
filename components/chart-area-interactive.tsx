"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { BadgeCheck, Bookmark } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const description = "An interactive area chart"

const chartData = [
  { date: "Senin", kelembaban: 60, pHtanah: 5.2, suhu: 28, nitrogen: 61, fosfor: 44, kalium: 84, ec: 1.87 },
  { date: "Selasa", kelembaban: 45, pHtanah: 8.1, suhu: 23.2, nitrogen: 59, fosfor: 56, kalium: 18, ec: 0.21 },
  { date: "Rabu", kelembaban: 52, pHtanah: 2.4, suhu: 22.8, nitrogen: 43, fosfor: 21, kalium: 119, ec: 1.88 },
  { date: "Kamis", kelembaban: 42, pHtanah: 6.3, suhu: 10, nitrogen: 88, fosfor: 46, kalium: 34, ec: 0.36 },
  { date: "Jumat", kelembaban: 73, pHtanah: 9.7, suhu: 27, nitrogen: 104, fosfor: 53, kalium: 98, ec: 2.16 },
  { date: "Sabtu", kelembaban: 30, pHtanah: 4.5, suhu: 39, nitrogen: 48, fosfor: 31, kalium: 87, ec: 1.23 },
  { date: "Minggu", kelembaban: 45, pHtanah: 8.6, suhu: 23.16, nitrogen: 56, fosfor: 20, kalium: 40, ec: 2.53 },
]
const parameterKeys = Object.keys(chartData[0]).filter((key) => key !== "date")
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

const datas = [
    {
        "Pupuk": "Urea",
        "Fungsi": "Sumber Nitrogen (N)",
        "Dosis": "100 kg/ha",
    },
    {
        "Pupuk": "SP-36",
        "Fungsi": "Sumber Fosfor (P)",
        "Dosis": "75 kg/ha",
    },
    
]

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("2d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  // const filteredData = chartData.filter((item) => {
  //   const date = new Date(item.date)
  //   const referenceDate = new Date("2024-06-30")
  //   let daysToSubtract = 90
  //   if (timeRange === "30d") {
  //     daysToSubtract = 30
  //   } else if (timeRange === "7d") {
  //     daysToSubtract = 7
  //   }
  //   const startDate = new Date(referenceDate)
  //   startDate.setDate(startDate.getDate() - daysToSubtract)
  //   return date >= startDate
  // })

  return (
    <div className="grid grid-cols-[55%_45%] gap-4 items-stretch">
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
      <Card className="@container/card bg-green-50 flex flex-col h-full">
        <CardHeader>
          <CardTitle>Rekomendasi Pemupukan</CardTitle>
          <div className="bg-green-200 border-2 border-green-300 rounded-[10px] p-3 flex items-center">
            <BadgeCheck className="text-green-700 w-20" />
            <span>Berdasarkan kondisi tanah saat ini, berikut rekomendasi pemupukan yang disarankan.</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <div className="h-full max-h-32 overflow-y-auto border rounded-md bg-white">
            <Table>
              <TableHeader>
                <TableRow>{Object.keys(datas[0]).map((head) => (
                  <TableHead key={head}>{head}</TableHead>
                ))}</TableRow>
              </TableHeader>
              <TableBody>
                {datas.map((data, index) => (
                  <TableRow key={index}>
                      <TableCell>{data.Pupuk}</TableCell>
                      <TableCell>{data.Fungsi}</TableCell>
                      <TableCell>{data.Dosis}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <div className="flex items-center gap-2 justify-center bg-emerald-700 text-white rounded-[10px] mt-auto p-3 mx-4">
          <Bookmark />
          Simpan Rekomendasi
        </div>
      </Card>
    </div>
  )
}
