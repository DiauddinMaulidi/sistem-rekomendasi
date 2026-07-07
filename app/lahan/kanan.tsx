import { Card } from '@/components/ui/card'
import { X } from 'lucide-react'

const Kanan = () => {
  return (
    <div>
        <Card className="@container/card px-3">
            <div className="mb-2 flex justify-between">
                <span className="font-bold">Detail Lahan</span>
                <X className='cursor-pointer' />
            </div>
            <div className='flex gap-2'>
                <img src="./sawahA.jpg" alt="sawah A" className='w-20 h-20 rounded-[10%]' />
                <div className='leading-6'>
                    <h1 className='font-bold'>Sawah A</h1>
                    <h2>Pringgabaya, Lombok Timur</h2>
                    <h2>Luas: 1.20 Ha</h2>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Kanan
