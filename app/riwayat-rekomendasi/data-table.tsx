"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, ChevronDown, Eye } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const datas = [
    {
        "Tanggal": "15/05/2026",
        "Lahan": "Lahan padi 1",
        "Rekomendasi": "Urea,SP-36,KCI",
        "Dosis (kg/ha)": "100,75,50",
        "Luas (ha)": 1.20,
    },
    {
        "Tanggal": "16/05/2026",
        "Lahan": "Lahan jagung 1",
        "Rekomendasi": "Urea",
        "Dosis (kg/ha)": "100",
        "Luas (ha)": 1.20,
    },
    {
        "Tanggal": "12/05/2026",
        "Lahan": "Lahan jagung 2",
        "Rekomendasi": "Urea",
        "Dosis (kg/ha)": "100",
        "Luas (ha)": 2.20,
    },
]


export function RiwayatRek() {
    const [search, setSearch] = useState("")
    const [jenisPupuk, setJenisPupuk] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    
    const handleChange = (e: { target: { value: string;};}) => {
        setSearch(e.target.value)
    }

    const dataFilters = datas.filter(data => {
        const searchData = search.toLowerCase();
        
        const cocokSearch =
            data.Tanggal.includes(searchData) ||
            data.Lahan.toLowerCase().includes(searchData) ||
            data.Rekomendasi.toLowerCase().includes(searchData) ||
            data["Dosis (kg/ha)"].toLowerCase().includes(searchData) ||
            data["Luas (ha)"].toString().includes(searchData)

        const cocokPupuk =
            !jenisPupuk || jenisPupuk === "Semua Jenis pupuk" || data.Rekomendasi.includes(jenisPupuk);

        return cocokSearch && cocokPupuk;
    })

    useEffect(() => {
        setCurrentPage(1)
    }, [search, jenisPupuk])

    const totalPages = Math.ceil(dataFilters.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = dataFilters.slice(startIndex, endIndex);

    return (
        <div className="px-2 pt-4 sm:px-6 sm:pt-6">
            <Card className="@container/card">
                <CardHeader className="flex justify-between">
                    <Input placeholder="Cari rekomendasi..." value={search} onChange={handleChange} className="w-[30%]" />
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-40 px-2" asChild>
                            <Button variant="outline">{jenisPupuk || "Semua Jenis pupuk"}<ChevronDown /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setJenisPupuk("")}>Semua Jenis pupuk</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setJenisPupuk("Urea")}>Urea</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setJenisPupuk("SP-36")}>SP-36</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setJenisPupuk("KCI")}>KCI</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
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
                            {currentData.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{data.Tanggal}</TableCell>
                                    <TableCell>{data.Lahan}</TableCell>
                                    <TableCell>{data.Rekomendasi}</TableCell>
                                    <TableCell>{data["Dosis (kg/ha)"]}</TableCell>
                                    <TableCell>{data["Luas (ha)"]}</TableCell>
                                    <TableCell>
                                        <button className="cursor-pointer"><Eye size={18} /></button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="flex justify-center items-center p-3">
                        {dataFilters.length === 0 && <p>Data Kosong</p>}
                    </div>

                    <div className="flex justify-center items-center gap-2 mt-4">
                        <Button
                            variant="outline"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                        >
                            Sebelumnya
                        </Button>

                        <span>
                            Halaman {currentPage} dari {totalPages || 1}
                        </span>

                        <Button
                            variant="outline"
                            disabled={currentPage === totalPages || totalPages === 0}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                        >
                            Selanjutnya
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}