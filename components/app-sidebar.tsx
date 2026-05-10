"use client"

import * as React from "react"

// import { NavMain } from "@/components/nav-main"
// import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, Settings2Icon, CommandIcon, History, Leaf, Binoculars, RadioTower, MapPinned, } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Monitoring Tanah",
      url: "/monitoring-tanah",
      icon: (
        <Binoculars />
      ),
    },
    {
      title: "Rekomendasi Pemupukan",
      url: "/rekomendasi-pemupukan",
      icon: (
        <Leaf />
      ),
    },
    {
      title: "Riwayat Rekomendasi",
      url: "/riwayat-rekomendasi",
      icon: (
        <History />
      ),
    },
    {
      title: "Lahan",
      url: "/lahan",
      icon: (
        <MapPinned />
      ),
    },
    {
      title: "Sensor",
      url: "/sensor",
      icon: (
        <RadioTower />
      ),
    },
    {
      title: "Settings",
      url: "/settings",
      icon: (
        <Settings2Icon />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  return (
    <Sidebar className="bg-emerald-800 text-white" collapsible="offcanvas" {...props}>
      <SidebarHeader className="bg-emerald-800">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarContent className="data-[slot=sidebar-menu-button]:py-6! flex flex-row">
              {/* <CommandIcon className="size-5!" /> */}
              <Image src="./plant.svg" alt="Logo Sistem" width={50} height={50} />
              <p>
                <span className="text-2xl font-semibold font-sans">AgriSmart</span><br />
                <span>Pemupukan Cerdas</span>
              </p>
            </SidebarContent>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-emerald-800 [&_button:hover]:bg-emerald-700 [&_button:hover]:text-white pt-5">
        {data.navMain.map((item) => {
          const isActive = pathname === item.url

          return (
            <Link key={item.title} href={item.url}>
              <button className={clsx(
                "flex w-full items-center gap-3 rounded-lg p-3 text-white transition-colors",
                isActive
                  ? "bg-emerald-700"
                  : "hover:bg-emerald-700"
              )}>
                {item.icon}
                <span>{item.title}</span>
              </button>
              {/* <NavMain items={data.navMain} /> */}
            </Link>
          )
        })}
      </SidebarContent>
      {/* <SidebarFooter className="bg-emerald-800">
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}
