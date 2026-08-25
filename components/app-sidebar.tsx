"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  LayoutDashboardIcon,
  History,
  Leaf,
  Binoculars,
  MapPinned,
  ArrowRight,
  Flower2,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Card } from "@/components/ui/card";
import { useActiveLahan } from "@/components/active-lahan-context";

const data = {
  navMain: [
    {
      title: "Dashboard",
      sublabel: "Kondisi 7 Parameter Tanah",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Monitoring Tanah",
      sublabel: "Telemetri NPK, EC, pH, Suhu",
      url: "/monitoring-tanah",
      icon: Binoculars,
    },
    {
      title: "Rekomendasi Pemupukan",
      sublabel: "Rekomendasi pupuk berbasis ML",
      url: "/rekomendasi-pemupukan",
      icon: Leaf,
    },
    {
      title: "Riwayat Rekomendasi",
      sublabel: "Catatan rekomendasi pemupukan",
      url: "/riwayat-rekomendasi",
      icon: History,
    },
    {
      title: "Lahan",
      sublabel: "Informasi dan pemetaan lahan",
      url: "/lahan",
      icon: MapPinned,
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { lahanAktif } = useActiveLahan();

  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}
      className="border-r border-slate-200/80 dark:border-slate-800"
    >
      {/* =====================================================
          HEADER / BRANDING
      ===================================================== */}
      <SidebarHeader className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="h-16 px-4 flex items-center gap-2.5">
              {/* Logo */}
              <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-emerald-700 to-lime-500 flex items-center justify-center shadow-sm shrink-0">
                🌱
              </div>

              {/* Brand */}
              <div className="min-w-0">
                <div className="flex items-baseline">
                  <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                    Agri
                  </span>

                  <span className="text-lg font-black tracking-tight text-emerald-700 dark:text-lime-400">
                    Smart
                  </span>
                </div>

                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  Pemupukan Cerdas
                </p>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* =====================================================
          CONTENT / NAVIGATION
      ===================================================== */}
      <SidebarContent className="bg-white dark:bg-slate-900 px-3 py-3">
        {/* Label */}
        <div className="px-3 py-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Menu Utama
        </div>

        {/* Navigation */}
        <div className="space-y-1">
          {data.navMain.map((item) => {
            const IconComponent = item.icon;

            /*
             * Exact URL
             *
             * Contoh:
             * /dashboard
             * /monitoring-tanah
             */
            const isActive = pathname === item.url;

            return (
              <Link key={item.title} href={item.url} className="block">
                <button
                  type="button"
                  className={clsx(
                    "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer",

                    isActive
                      ? "bg-emerald-800 dark:bg-emerald-600 text-white font-semibold shadow-xs"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
                  )}
                >
                  {/* ICON */}
                  <IconComponent
                    className={clsx(
                      "w-5 h-5 shrink-0",

                      isActive
                        ? "text-emerald-100"
                        : "text-slate-400 dark:text-slate-400",
                    )}
                  />

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">
                    {/* Title */}
                    <div className="text-xs font-semibold leading-tight truncate">
                      {item.title}
                    </div>

                    {/* Sublabel */}
                    <div
                      className={clsx(
                        "text-[10px] truncate leading-tight mt-0.5",

                        isActive
                          ? "text-emerald-200"
                          : "text-slate-400 dark:text-slate-500",
                      )}
                    >
                      {item.sublabel}
                    </div>
                  </div>
                </button>
              </Link>
            );
          })}
        </div>
      </SidebarContent>

      <SidebarFooter
        className="
    bg-slate-50/70
    dark:bg-slate-950/40
    border-t
    border-slate-100
    dark:border-slate-800
    p-3
  "
      >
        <Card
          className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-3
      shadow-2xs
      dark:border-slate-800
      dark:bg-slate-900
    "
        >
          <div className="mb-3 flex items-center gap-3">
            <div
              className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-emerald-100
        dark:bg-emerald-950/60
      "
            >
              <Flower2
                className="
          h-6
          w-6
          text-emerald-600
          dark:text-emerald-400
        "
              />
            </div>

            <div className="min-w-0">
              <span
                className="
          text-[10px]
          font-medium
          text-slate-400
          dark:text-slate-500
        "
              >
                Lahan Aktif
              </span>

              <h1
                className="
          truncate
          text-sm
          font-bold
          text-slate-900
          dark:text-white
        "
              >
                {lahanAktif?.nama ?? "Belum ada lahan aktif"}
              </h1>
            </div>
          </div>

          <div className="mb-3 space-y-1.5">
            <div
              className="
        flex
        items-center
        justify-between
        text-[11px]
      "
            >
              <span
                className="
          text-slate-500
          dark:text-slate-400
        "
              >
                Tanaman
              </span>

              <span
                className="
          font-bold
          text-slate-800
          dark:text-slate-200
        "
              >
                {lahanAktif?.tanaman ?? "-"}
              </span>
            </div>

            <div
              className="
        flex
        items-center
        justify-between
        text-[11px]
      "
            >
              <span
                className="
          text-slate-500
          dark:text-slate-400
        "
              >
                Luas Lahan
              </span>

              <span
                className="
          font-bold
          text-slate-800
          dark:text-slate-200
        "
              >
                {lahanAktif?.luas ? `${lahanAktif.luas} ha` : "-"}
              </span>
            </div>

            <div
              className="
        flex
        items-center
        justify-between
        text-[11px]
      "
            >
              <span
                className="
          text-slate-500
          dark:text-slate-400
        "
              >
                Sensor
              </span>

              <span
                className="
          font-bold
          text-slate-800
          dark:text-slate-200
        "
              >
                {lahanAktif?.sensor ?? "-"}
              </span>
            </div>
          </div>

          <Link
            href={lahanAktif ? `/lahan/edit/${lahanAktif.id}` : "/lahan"}
            className="
        rounded-xl
        bg-emerald-800
        px-3
        py-2.5
        text-xs
        font-semibold
        text-white
        transition-colors
        hover:bg-emerald-900
        dark:bg-emerald-600
        dark:hover:bg-emerald-500
        flex
        items-center
        justify-center
        gap-2
      "
          >
            <span>Lihat Detail Lahan</span>

            <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>

        <div
          className="
    pt-1
    text-center
    text-[9px]
    text-slate-400
    dark:text-slate-500
  "
        >
          AgriSmart • Pemupukan Cerdas
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
