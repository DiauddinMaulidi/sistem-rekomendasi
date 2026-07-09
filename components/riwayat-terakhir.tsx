"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getLatestRek } from "@/services/riwayat"
import { ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Props {
    refresh: boolean;
}

export function RiwayatDash({refresh}: Props) {
    const [result, setResult] = useState<any>(null)

    async function riwayatPredict() {
        try {
            const sensorRiwayat = await getLatestRek()
            setResult(sensorRiwayat)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        riwayatPredict()
    }, [refresh])

    return (
        <div className="px-2 pt-4 sm:px-6 sm:pt-6">
            <Card className="@container/card">
                <CardHeader>
                    <CardTitle>Riwayat Pemupukan</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tanggal</TableHead>
                                <TableHead>Rekomendasi</TableHead>
                                <TableHead>Dosis</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {result?.map((data: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{data.tanggal}</TableCell>
                                    {/* <TableCell>{data.Lahan}</TableCell> */}
                                    <TableCell>{data.jenisPupuk}</TableCell>
                                    <TableCell>{data.dosis}</TableCell>
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