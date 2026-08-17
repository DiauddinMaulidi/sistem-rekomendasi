import { Button } from "@/components/ui/button"
import { tampilLahan } from "@/services/tambah"
import { Eye, MountainSnow, Pencil, RadioTower, Sprout, Trash, VectorSquare } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function CardLahan() {
    const [getLahan, setGetLahan] = useState<any[]>([])

    async function loadLahan(){
        try {
            const datas = await tampilLahan()
            setGetLahan(datas?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadLahan()
    }, [])


  return (
    <>
        {getLahan.map((lahan: any, index: number) => (
            <div key={index} className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 rounded-[10px] m-5 p-4 inset-shadow-xs shadow-lg">
                <div className="relative w-full max-w-sm pt-0 pr-5">
                    <img
                        src={lahan?.gambar}
                        alt={lahan?.nama}
                        className="rounded-[10px] z-20 aspect-video w-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="flex items-center gap-3 text-[20px] font-bold">
                        <MountainSnow className="text-green-700" />
                        {lahan?.nama}
                    </h1>
                    <h2 className="flex items-center gap-3">
                        <VectorSquare className="text-green-700" />
                        Luas: {lahan?.luas}
                    </h2>
                    <h2 className="flex items-center gap-3">
                        <Sprout className="text-green-700" />
                        Tanaman: {lahan?.tanaman}
                    </h2>
                    <h2 className="flex items-center gap-3">
                        <RadioTower className="text-green-700" />
                        Sensor: {lahan?.sensor}
                    </h2>
                </div>
                <div className="flex flex-col gap-4 pt-0 items-center justify-center">
                    <Link href={`/lahan/edit/${lahan.id}`}>
                        <Button className="w-32 cursor-pointer bg-white border-2 border-green-700 text-green-700">
                            <Pencil />
                            Edit
                        </Button>
                    </Link>
                    <Button className="w-32 cursor-pointer bg-white border-2 border-blue-600 text-blue-600">
                        <Eye />
                        Detail
                    </Button>
                    <Button className="w-32 cursor-pointer bg-white border-2 border-red-600 text-red-600">
                        <Trash />
                        Hapus
                    </Button>
                </div>
            </div>
        ))}
    </>
  )
}
