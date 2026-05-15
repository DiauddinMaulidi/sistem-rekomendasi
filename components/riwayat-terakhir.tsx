import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, Eye } from "lucide-react"

const datas = [
    {
        "tanggal": "15/05/2026",
        "lahan": "Lahan padi 1",
        "rekomendasi": "Urea,SP-36,KCI",
    },
    {
        "tanggal": "16/05/2026",
        "lahan": "Lahan jagung 1",
        "rekomendasi": "Urea",
    },
    {
        "tanggal": "12/05/2026",
        "lahan": "Lahan jagung 2",
        "rekomendasi": "Urea",
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
                                    <TableCell>{data.tanggal}</TableCell>
                                    <TableCell>{data.lahan}</TableCell>
                                    <TableCell>{data.rekomendasi}</TableCell>
                                    <TableCell>
                                        <button className="cursor-pointer"><Eye size={18} /></button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <button className="cursor-pointer rounded-[10px] bg-gray-200 text-blue-600 font-bold flex items-center justify-center gap-2 p-3 w-full hover:bg-gray-300 transition">
                        Lihat Semua Riwayat
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </CardContent>
            </Card>
        </div>
    )
}