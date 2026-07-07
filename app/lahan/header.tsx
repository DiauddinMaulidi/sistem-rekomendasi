import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ChartLine, Dot, Droplets, FileText, FlaskConical, Flower2, RadioTower, Ruler, Sprout, Thermometer, WifiSync } from "lucide-react";

export default function HeaderLahan() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-2 dark:*:data-[slot=card]:bg-card">
        <Card className="@container/card flex items-center flex-row gap-3 px-3">
          <div className="bg-green-200 rounded-full p-2">
            <Flower2 className="text-green-950 w-10 h-10" />
          </div>
          <div>
            <h1 className="font-bold">Total Lahan</h1>
            <h1 className="font-bold text-2xl">3</h1>
            <h1>Lahan</h1>
          </div>
        </Card>
        <Card className="@container/card flex items-center flex-row gap-3 px-3">
          <div className="bg-green-200 rounded-full p-2">
            <RadioTower className="text-green-950 w-10 h-10" />
          </div>
          <div>
            <h1 className="font-bold">Lahan Aktif</h1>
            <h1 className="font-bold text-2xl">3</h1>
            <h1>Lahan</h1>
          </div>
        </Card>
        <Card className="@container/card flex items-center flex-row gap-3 px-3">
          <div className="bg-green-200 rounded-full p-2">
            <WifiSync className="text-green-950 w-10 h-10" />
          </div>
          <div>
            <h1 className="font-bold">Sensor Terhubung</h1>
            <h1 className="font-bold text-2xl">5</h1>
            <h1>Sensor</h1>
          </div>
        </Card>
        <Card className="@container/card flex items-center flex-row gap-3 px-3">
          <div className="bg-green-200 rounded-full p-2">
            <Ruler className="text-green-950 w-10 h-10" />
          </div>
          <div>
            <h1 className="font-bold">Luas Total</h1>
            <h1 className="font-bold text-2xl">8.70</h1>
            <h1>ha</h1>
          </div>
        </Card>
      </div>
  )
}
