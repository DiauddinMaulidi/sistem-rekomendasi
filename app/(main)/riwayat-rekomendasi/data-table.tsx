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
import { getLatestRek } from "@/services/riwayat"
import { ChevronDown, Eye } from "lucide-react"
import { useEffect, useState } from "react"

export function RiwayatRek() {
    const [search, setSearch] = useState("")
    const [jenisPupuk, setJenisPupuk] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [result, setResult] = useState<any>(null)
    const itemsPerPage = 5;
    
    const handleChange = (e: { target: { value: string;};}) => {
        setSearch(e.target.value)
    }

    const dataFilters = result?.data?.filter((data: any) => {
        const searchData = search.toLowerCase();
        
        const cocokSearch =
            data.tanggal.includes(searchData) ||
            data.jenisPupuk.toLowerCase().includes(searchData) ||
            String(data.dosis).toLowerCase().includes(searchData)

        const cocokPupuk =
            !jenisPupuk || data.jenisPupuk === jenisPupuk;

        return cocokSearch && cocokPupuk;
    }) ?? []
    
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
    }, [])


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
                            <DropdownMenuItem onClick={() => setJenisPupuk("NPK")}>NPK</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setJenisPupuk("DAP")}>DAP</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setJenisPupuk("MOP")}>MOP</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setJenisPupuk("Zinc_Sulphate")}>Zinc Sulphate</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setJenisPupuk("Compost")}>Compost</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
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
                            {currentData?.map((data: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{data.tanggal}</TableCell>
                                    <TableCell>{data.jenisPupuk}</TableCell>
                                    <TableCell>{data.dosis} kg/ha</TableCell>
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