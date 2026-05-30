import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, Eye } from "lucide-react"
import Link from "next/link"

const datas = [
    {
        "Tanggal": "15/05/2026",
        "Lahan": "Lahan padi 1",
        "Rekomendasi": "Urea,SP-36,KCI",
        "Dosis (kg/ha)": "100,75,50",
    },
    {
        "Tanggal": "16/05/2026",
        "Lahan": "Lahan jagung 1",
        "Rekomendasi": "Urea",
        "Dosis (kg/ha)": "100",
    },
    {
        "Tanggal": "12/05/2026",
        "Lahan": "Lahan jagung 2",
        "Rekomendasi": "Urea",
        "Dosis (kg/ha)": "100",
    },
]

export function RiwayatDash() {
    return (
        <div className="px-2 pt-4 sm:px-6 sm:pt-6">
            <Card className="@container/card">
                <CardHeader>
                    <CardTitle>Riwayat Pemupukan</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>{Object.keys(datas[0]).map((heads) => (
                                <TableHead key={heads}>{heads}</TableHead> ))}
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {datas.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{data.Tanggal}</TableCell>
                                    <TableCell>{data.Lahan}</TableCell>
                                    <TableCell>{data.Rekomendasi}</TableCell>
                                    <TableCell>{data["Dosis (kg/ha)"]}</TableCell>
                                    <TableCell>
                                        <button className="cursor-pointer"><Eye size={18} /></button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Link href="/riwayat-rekomendasi">
                        <button className="cursor-pointer rounded-[10px] bg-gray-200 text-blue-600 font-bold flex items-center justify-center gap-2 p-3 w-full hover:bg-gray-300 transition">
                            Lihat Semua Riwayat
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}