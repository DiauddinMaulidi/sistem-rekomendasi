"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BadgeCheck, Bookmark } from "lucide-react"
import { sendPredict } from "@/services/predict"
import { saveRecommendation } from "@/services/recommendation"
import { getLatestRek } from "@/services/riwayat"
import { RiwayatDash } from "./riwayat-terakhir"

interface Props {
    onSaved: () => void;
}

export function ChartAreaInteractive({onSaved}: Props) {

  const [result, setResult] = React.useState<any>(null)
  const [loading,setLoading] = React.useState(false);

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

  const fertilizerImages: Record<string, string> = {
    Urea: "/urea.jpg",
    MOP: "/mop.jpg",
    NPK: "/npk.jpeg",
    DAP: "/dap.jpg",
    "Zinc Sulphate": "/Zinc_Sulphate.jpg",
    Compost: "/compost.jpg",
  };

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
    </div>
  )
}


// 428 x 333