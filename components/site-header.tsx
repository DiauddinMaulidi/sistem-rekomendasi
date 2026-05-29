"use client"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

const dataTitle = [
  {
    no: 1,
    title: "Selamat datang, Kawan!",
    subTitle: "Berikut ringkasan kondisi tanah dan rekomendasi pemupukan hari ini.",
    url: "/dashboard"
  },
  {
    no: 2,
    title: "Monitoring Tanah",
    subTitle: "Pantau kondisi tanah secara real-time berdasarkan data sensor.",
    url: "/monitoring-tanah"
  },
  {
    no: 3,
    title: "Rekomendasi Pemupukan",
    subTitle: "Rekomendasi diberikan berdasarkan 7 parameter tanah.",
    url: "/rekomendasi-pemupukan"
  }
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-(--header-height)"
        />
        {dataTitle.map((item) => {
          const isActive = pathname === item.url
          
          return (
            <div>
              <h1 key={item.no} className="text-black text-[18px] font-bold">
                {isActive ? item.title : ""}
              </h1>
              {isActive ? item.subTitle : ""}
            </div>
          )
        })}
        {/* <h1 className="text-base font-medium">Documents</h1> */}
      </div>
    </header>
  )
}
