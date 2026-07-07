"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BadgeCheck, Bookmark } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getPredict, sendPredict } from "@/services/predict"

export function ChartAreaInteractive() {

  const [result, setResult] = React.useState<any>(null)
  
  React.useEffect(() => {    
    loadData();
  }, [])

  async function loadData() {
    try {
        const data = await getPredict();
        setResult(data);
      } catch (err) {
        console.error(err);
      }
    }

  async function handlePredict() {
    const data = await sendPredict();
    setResult(data);
  }

  return (
    <div className="items-stretch">
      <Card className="@container/card bg-green-50 flex flex-col h-full">
        <CardHeader>
          <CardTitle>Rekomendasi Pemupukan</CardTitle>
          <div className="bg-green-200 border-2 border-green-300 rounded-[10px] py-3 flex items-center">
            <BadgeCheck className="text-green-700 w-20" />
            <span>Berdasarkan kondisi tanah saat ini, berikut rekomendasi pemupukan yang disarankan.</span>
          </div>
        </CardHeader>
        <CardContent className="flex gap-3 overflow-hidden">
          <div>
            <img src="./urea.jpg" className="rounded-md border" alt="" />
          </div>
          <div className="w-full p-3 max-h-56 overflow-y-auto border rounded-md bg-white">
            <div className="mb-5">
              <span className="font-semibold">Pupuk yang direkomendasikan adalah</span>
              <h1 className="text-green-900 text-2xl font-bold">{result?.jenisPupuk}</h1>
            </div>
            <div>
              <span className="font-semibold">Dosis yang disarankan</span>
              <h1 className="text-green-900 text-2xl font-bold">{result?.dosis} kg/ha</h1>
            </div>
            {/* <Table>
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
            </Table> */}
          </div>
        </CardContent>
        <button onClick={handlePredict} className="flex items-center gap-2 justify-center cursor-pointer bg-emerald-700 hover:bg-emerald-600 text-white rounded-[10px] mt-auto p-2 mx-4">
          <Bookmark />
          Simpan Rekomendasi
        </button>
      </Card>
    </div>
  )
}
