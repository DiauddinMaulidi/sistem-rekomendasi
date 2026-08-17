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
import { sendPredict } from "@/services/predict"
import { saveRecommendation } from "@/services/recommendation"
import { getLatestSensor } from "@/services/sensor"

export const description = "An interactive area chart"

interface Props {
    onSaved: () => void;
}

export function RekomendasiPemupukan({onSaved}: Props) {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("2d")
  const [result, setResult] = React.useState<any>(null)
  const [loading,setLoading] = React.useState(false);
  const [resultInfo, setResultInfo] = React.useState<any>(null)

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  
  async function handlePredict(){
    try{
      setLoading(true);
      const data = await sendPredict();
      setResult(data);
    }catch(err){
      console.error(err);
    }finally{
      setLoading(false);
    }
  }
  
  async function handleSave(){
    if(!result){
      alert("Lakukan prediksi terlebih dahulu");
      return;
    }
    try{
      await saveRecommendation(result);
      onSaved()
      alert("Rekomendasi berhasil disimpan");
    }catch(err){
      console.error(err);
    }
  }

  async function tanamanInfo(){
    try {
      const info = await getLatestSensor()
      setResultInfo(info)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    tanamanInfo()
  }, [])
  
  const fertilizerImages: Record<string, string> = {
    Urea: "/urea.jpg",
    MOP: "/mop.jpg",
    NPK: "/npk.jpeg",
    DAP: "/dap.jpg",
    "Zinc Sulphate": "/Zinc_Sulphate.jpg",
    Compost: "/compost.jpg",
  };

  return (
    <div className="grid grid-cols-[60%_40%] gap-4 items-stretch">
      <Card className="@container/card bg-green-50 flex flex-col h-full">
        <CardHeader>
          <CardTitle>Rekomendasi Pemupukan</CardTitle>
          <div className="bg-green-200 border-2 border-green-300 rounded-[10px] py-3 flex items-center">
            <BadgeCheck className="text-green-700 w-20" />
            <span>Berdasarkan kondisi tanah saat ini, berikut rekomendasi pemupukan yang disarankan.</span>
          </div>
        </CardHeader>
        <CardContent className="flex gap-3 overflow-hidden">
          <img
            src={fertilizerImages[result?.jenisPupuk] ?? "/default.jpg"}
            alt={result?.jenisPupuk}
            className="rounded-md border w-52"
          />
          <div className="w-full p-3 max-h-56 overflow-y-auto border rounded-md bg-white">
            <div className="mb-5">
              <span className="font-semibold">Pupuk yang direkomendasikan adalah</span>
              <h1 className="text-green-900 text-2xl font-bold">{result?.jenisPupuk}</h1>
            </div>
            <div className="mb-5">
              <span className="font-semibold">Dosis yang disarankan</span>
              <h1 className="text-green-900 text-2xl font-bold">{result?.dosis} kg/ha</h1>
            </div>
            <div className="flex items-end justify-center">
              <button onClick={handlePredict} disabled={loading} className="bg-emerald-700 hover:bg-emerald-600 text-white rounded-[10px] p-3">
                { loading ? "Memproses..." : "Prediksi" }
              </button>
            </div>
          </div>
        </CardContent>
        <button onClick={handleSave} className="flex items-center gap-2 justify-center cursor-pointer bg-emerald-700 hover:bg-emerald-600 text-white rounded-[10px] mt-auto p-2 mx-4">
          <Bookmark />
          Simpan Rekomendasi
        </button>
      </Card>
        <Card className="@container/card bg-green-50 flex flex-col h-full">
            <CardContent className="flex-1 overflow-hidden">
                <div>
                    <div className="flex gap-3 my-2">
                        {/* <CircleX className="w-8 text-red-400" /> */}
                        <CircleCheck className="w-8 text-green-700" />
                        <div>
                            <h1 className="font-bold">Jenis Tanaman</h1>
                            <span className="">{resultInfo?.jenisTanaman}</span>
                        </div>
                    </div>
                    <div className="flex gap-3 my-2">
                        {/* <CircleCheck className="w-8 text-orange-400" /> */}
                        <CircleCheck className="w-8 text-green-700" />
                        <div>
                            <h1 className="font-bold">Luas Lahan</h1>
                            <span className="">1000 m²</span>
                        </div>
                    </div>
                    <div className="flex gap-3 my-2">
                        {/* <CircleCheck className="w-8 text-green-700" /> */}
                        <CircleCheck className="w-8 text-green-700" />
                        <div>
                            <h1 className="font-bold">Lahan</h1>
                            <span className="">Lahan 1</span>
                        </div>
                    </div>
                    <div className="flex gap-3 my-2">
                        <CircleCheck className="w-8 text-green-700" />
                        <div>
                            <h1 className="font-bold">Tanggal Rekomendasi</h1>
                            <span className="">{resultInfo?.tanggal? new Date(resultInfo.tanggal).toLocaleDateString("id-ID", {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                })
                              : "-"}
                            </span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
