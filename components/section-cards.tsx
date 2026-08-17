"use client"

// import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getLatestSensor } from "@/services/sensor"
import { Droplets, FlaskConical, Thermometer, CircleParking, Atom, ActivityIcon, Dot, Sprout } from "lucide-react"
import { useEffect, useState } from "react"

export function SectionCards() {

  const [sensor, setSensor] = useState<any>(null)

  useEffect(() => {
    loadSensor();
  }, []);

  async function loadSensor(){
    try{
      const data = await getLatestSensor();
      setSensor(data);
    }catch(err){
      console.error(err);
    }

  }
  return (
    <div>
      <div className="px-6 mb-2 grid grid-cols-2 justify-between">
        <span className="font-bold">Kondisi Tanah</span>
      </div>
      <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
        <Card className="@container/card bg-blue-200">
          <CardHeader>
            <CardDescription className="font-semibold text-black">Kelembaban</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {sensor?.kelembaban}%
            </CardTitle>
            <CardAction>
              <Droplets className="bg-blue-400 rounded-full w-8 h-8 p-1" />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex items-center gap-2 font-medium">
              {/* <Dot className="size-3 bg-blue-400 rounded-full text-blue-400" />
              Sedang */}
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card bg-green-200">
          <CardHeader>
            <CardDescription className="font-semibold text-black">pH Tanah</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {sensor?.pH_Tanah}
            </CardTitle>
            <CardAction>
              <FlaskConical className="bg-green-400 text-green-900 rounded-full w-8 h-8 p-1" />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex items-center gap-2 font-medium">
              {/* <Dot className="size-3 bg-green-400 rounded-full text-green-400" />
              Optimal */}
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card bg-orange-200">
          <CardHeader>
            <CardDescription className="font-semibold text-black">Suhu Tanah</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {sensor?.suhuTanah}°C
            </CardTitle>
            <CardAction>
              <Thermometer className="bg-orange-400 text-orange-900 rounded-full w-8 h-8 p-1" />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex items-center gap-2 font-medium">
              {/* <Dot className="size-3 bg-orange-400 rounded-full text-orange-400" />
              Normal */}
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card bg-purple-200">
          <CardHeader>
            <CardDescription className="font-semibold text-black">Nitrogen</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {sensor?.nitrogen} ppm
            </CardTitle>
            <CardAction>
              <Sprout className="bg-purple-400 text-purple-900 rounded-full w-8 h-8 p-1" />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex items-center gap-2 font-medium">
              {/* <Dot className="size-3 bg-purple-400 rounded-full text-purple-400" />
              Rendah */}
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card bg-amber-200">
          <CardHeader>
            <CardDescription className="font-semibold text-black">Fosfor</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {sensor?.fosfor} ppm
            </CardTitle>
            <CardAction>
              <CircleParking className="bg-amber-400 text-amber-900 rounded-full w-8 h-8 p-1" />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex items-center gap-2 font-medium">
              {/* <Dot className="size-3 bg-amber-400 rounded-full text-amber-400" />
              Rendah */}
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card bg-cyan-200">
          <CardHeader>
            <CardDescription className="font-semibold text-black">Kalium</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {sensor?.kalium} ppm
            </CardTitle>
            <CardAction>
              <Atom className="bg-cyan-400 text-cyan-900 rounded-full w-8 h-8 p-1" />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex items-center gap-2 font-medium">
              {/* <Dot className="size-3 bg-cyan-400 rounded-full text-cyan-400" />
              Rendah */}
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card bg-rose-200">
          <CardHeader>
            <CardDescription className="font-semibold text-black">Electrical Conductivity</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {sensor?.ec} dS/m
            </CardTitle>
            <CardAction>
              <ActivityIcon className="bg-rose-400 text-rose-900 rounded-full w-8 h-8 p-1" />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex items-center gap-2 font-medium">
              {/* <Dot className="size-3 bg-rose-400 rounded-full text-rose-400" /> */}
              {/* Normal */}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
