"use client"

import * as React from "react"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
} from "@/components/ui/chart"
import { BadgeCheck, Lightbulb } from "lucide-react"

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
        "Title": "Kelembaban tanah dalam kondisi sedang",
        "Ket": "masih rentang yang cukup untuk tanaman",
    },
    {
        "Title": "pH tanah dalam kondisi optimal",
        "Ket": "Tidak diperlukan kapur atau dolomoit",
    },
    
]

export function StatusTanah() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("2d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  return (
    <div className="grid grid-cols-[60%_40%] gap-4 items-stretch">
      <Card className="@container/card bg-green-50 flex flex-col h-full">
        <CardHeader>
          <CardTitle>Status Kondisi Tanah</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
            {datas.map((data) => (
                <div className="flex items-center gap-3">
                    <BadgeCheck className="text-green-700" />
                    <div className="my-2">
                        <h1 className="font-bold">{data.Title}</h1>
                        <p>{data.Ket}</p>
                    </div>
                </div>
            ))}
        </CardContent>
      </Card>
      <Card className="@container/card bg-green-50 flex flex-col h-full">
        <CardHeader className="flex">
            <Lightbulb className="text-green-700" />
            <CardTitle>Tips</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
            <div className="w-[80%]">
                <div className="flex items-center gap-3 my-2">
                    <BadgeCheck className="text-green-700" />
                    <h1 className="">Lakukan pemupukan sesuai rekomendasi sistem</h1>
                </div>
                <div className="flex items-center gap-3 my-2">
                    <BadgeCheck className="text-green-700" />
                    <h1 className="">Jaga kelembaban tanah dengan irigasi yang cukup</h1>
                </div>
                <div className="flex items-center gap-3 my-2">
                    <BadgeCheck className="text-green-700" />
                    <h1 className="">Lakukan monitoring secara rutin untuk hasil optimal</h1>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
