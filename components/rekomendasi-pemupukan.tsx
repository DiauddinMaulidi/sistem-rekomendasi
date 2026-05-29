"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BadgeCheck, Bookmark, CircleAlert, CircleCheck, CircleX } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const description = "An interactive area chart"

const datas = [
    {
        "Pupuk": "Urea",
        "Fungsi": "Menambah sumber Nitrogen (N)",
        "Dosis": 100,
        "Satuan": "kg/ha",
        "Waktu Aplikasi": "Pagi hari (06.00 - 09.00)",
    },
    {
        "Pupuk": "SP-36",
        "Fungsi": "Menambah sumber Fosfor (P)",
        "Dosis": 75,
        "Satuan": "kg/ha",
        "Waktu Aplikasi": "Pagi hari (06.00 - 09.00)",
    },
    {
        "Pupuk": "KCI",
        "Fungsi": "Menambah sumber Kalium (K)",
        "Dosis": 50,
        "Satuan": "kg/ha",
        "Waktu Aplikasi": "Pagi hari (06.00 - 09.00)",
    },
    
]

export function RekomendasiPemupukan() {
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
          <CardTitle>Rekomendasi Pemupukan</CardTitle>
          <div className="bg-green-200 border-2 border-green-300 rounded-[10px] p-2 flex items-center">
            <BadgeCheck className="text-green-700 w-20" />
            <span>Berdasarkan kondisi tanah saat ini, berikut rekomendasi pemupukan yang disarankan.</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <div className="h-full max-h-44 overflow-y-auto border rounded-md bg-white">
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
                      <TableCell>{data.Satuan}</TableCell>
                      <TableCell>{data["Waktu Aplikasi"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        
        <div className="bg-yellow-100 rounded-[10px] mx-4 p-2 grid grid-cols-[60%_40%] gap-4">
            <div className="flex gap-3 my-2">
                <CircleAlert className="text-green-700" />
                <div>
                    <h6 className="font-bold">Total Kebutuhan</h6>
                    <span className="">Urea 100 kg - SP-32 75 kg - KCI 50 kg</span>
                </div>
            </div>
            <div className="flex gap-3 my-2">
                <div>
                    <h6 className="font-bold">Luas Lahan</h6>
                    <span className="">120 ha</span>
                </div>
            </div>
        </div>
        
        <button className="flex items-center gap-2 justify-center cursor-pointer bg-emerald-700 hover:bg-emerald-600 text-white rounded-[10px] mt-auto p-2 mx-4">
          <Bookmark />
          Simpan Rekomendasi
        </button>
      </Card>
        <Card className="@container/card bg-green-50 flex flex-col h-full">
            <CardHeader>
                <CardTitle>Ringkasan & Alasan</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
                <div>
                    <div className="flex gap-3 my-2">
                        <CircleX className="w-8 text-red-400" />
                        <div>
                            <h1 className="font-bold">Nitrogen rendah</h1>
                            <span className="">Nilai 24 ppm dibawah ambang 30 ppm, perlu menambah Urea.</span>
                        </div>
                    </div>
                    <div className="flex gap-3 my-2">
                        <CircleCheck className="w-8 text-orange-400" />
                        <div>
                            <h1 className="font-bold">Fosfor rendah</h1>
                            <span className="">Nilai 16 ppm dibawah ambang 20 ppm, perlu menambah SP-32.</span>
                        </div>
                    </div>
                    <div className="flex gap-3 my-2">
                        <CircleCheck className="w-8 text-green-700" />
                        <div>
                            <h1 className="font-bold">Kalium sedang</h1>
                            <span className="">Nilai 35 ppm masih dalam rentang cukup, perlu dosis pemeliharaan KCI.</span>
                        </div>
                    </div>
                    <div className="flex gap-3 my-2">
                        <CircleCheck className="w-8 text-green-700" />
                        <div>
                            <h1 className="font-bold">pH optimal</h1>
                            <span className="">pH 6.4 dalam rentang ideal untuk pertumbuhan padi.</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
