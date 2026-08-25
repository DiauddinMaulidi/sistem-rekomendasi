"use client"

import { Activity, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Cpu, Database, ExternalLink, Leaf, Radio, Sliders, Sprout } from "lucide-react";
import { useState } from "react";

interface LandingPageProps {
    onEnterDashboard: () => void;
}

export default function LandingPage({onEnterDashboard}: LandingPageProps) {
  const [activeNav, setActiveNav] = useState<'beranda' | 'tentang' | 'fitur' | 'cara-kerja' | 'kontak'>('beranda');
  
  const scrollToSection = (sectionId: string, navItem: typeof activeNav) => {
    setActiveNav(navItem);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#071912] text-slate-100 font-sans relative overflow-x-hidden selection:bg-lime-400 selection:text-slate-950">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 left-1/4 w-150 h-150 bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-137.5 h-137.5 bg-lime-500/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-125 h-125 bg-teal-500/10 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <header className="sticky top-0 z-50 bg-[#071912]/85 backdrop-blur-lg border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('beranda', 'beranda')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-emerald-600 to-lime-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 stroke-[2.4] fill-slate-950/20" />
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-black tracking-tight text-white">Agro</span>
              <span className="text-2xl font-black tracking-tight text-lime-400">Plan</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection('beranda', 'beranda')}
              className={`transition-colors cursor-pointer py-1 relative ${
                activeNav === 'beranda'
                  ? 'text-lime-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Beranda
              {activeNav === 'beranda' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-400 rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('tentang', 'tentang')}
              className={`transition-colors cursor-pointer py-1 relative ${
                activeNav === 'tentang'
                  ? 'text-lime-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Tentang
              {activeNav === 'tentang' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-400 rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('fitur', 'fitur')}
              className={`transition-colors cursor-pointer py-1 relative ${
                activeNav === 'fitur'
                  ? 'text-lime-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Fitur
              {activeNav === 'fitur' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-400 rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('cara-kerja', 'cara-kerja')}
              className={`transition-colors cursor-pointer py-1 relative ${
                activeNav === 'cara-kerja'
                  ? 'text-lime-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Cara Kerja
              {activeNav === 'cara-kerja' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-400 rounded-full" />
              )}
            </button>
          </nav>

        </div>
      </header>

      <section id="beranda" className="relative z-10 pt-8 sm:pt-14 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 pr-0 lg:pr-4">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d2f21]/90 border border-emerald-600/60 text-lime-400 text-xs font-semibold tracking-wide shadow-inner">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span>Pertanian Cerdas • Solusi Pemupukan • Hasil Panen Optimal</span>
            </div>

            {/* Main Headline with exact styling from screenshot */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Solusi Cerdas untuk{' '}
              <span className="text-lime-400 drop-shadow-[0_0_25px_rgba(163,230,53,0.3)]">
                Rekomendasi Pemupukan
              </span>{' '}
              Berdasarkan Kondisi Tanah Secara Real-time
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              AgroPlan membantu menganalisis kondisi tanah di lahan Anda dan memberikan rekomendasi pupuk terbaik agar tanaman tumbuh sehat dan hasil panen lebih maksimal
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('tentang', 'tentang')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0a2318] hover:bg-[#0f3424] border border-emerald-600/80 hover:border-lime-400 text-lime-300 text-sm font-semibold transition-all cursor-pointer shadow-md"
              >
                <Leaf className="w-4 h-4 text-lime-400" />
                <span>Pelajari Lebih Lanjut</span>
              </button>

              <button
                onClick={onEnterDashboard}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-linear-to-r from-lime-400 to-emerald-500 hover:from-lime-300 hover:to-emerald-400 text-slate-950 text-sm font-bold transition-all shadow-xl shadow-lime-500/20 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Masuk ke Dashboard Sistem</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic Showcase with Circular Frames */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            {/* Tech Radar / Concentric Green Rings */}
            <div className="absolute w-90 sm:w-115 h-90 sm:h-115 rounded-full border border-emerald-500/20 animate-spin-slow pointer-events-none" />
            <div className="absolute w-70 sm:w-90 h-70 sm:h-90 rounded-full border border-lime-400/25 border-dashed pointer-events-none" />
            <div className="absolute w-50 sm:w-65 h-50 sm:h-65 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

            {/* Overlapping Circle 1 (Top Right: IoT Soil Sensor Node Probe in Soil) */}
            <div className="relative z-20 w-52 sm:w-64 h-52 sm:h-64 rounded-full p-1.5 bg-linear-to-br from-lime-400 via-emerald-500 to-transparent shadow-2xl shadow-emerald-950 -mr-16 sm:-mr-20 -mt-10 group">
              <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#071912]">
                <img
                  src="sensor.jpg"
                  alt="IoT Soil Sensor Probe"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Overlapping Circle 2 (Bottom Left: Scenic Agricultural Farm Field) */}
            <div className="relative z-10 w-60 sm:w-72 h-60 sm:h-72 rounded-full p-1.5 bg-linear-to-tl from-emerald-600 via-lime-400 to-transparent shadow-2xl shadow-black/80 -ml-16 sm:-ml-20 mt-14 group">
              <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#071912]">
                <img
                  src="lahan.jpg"
                  alt="Lush Agricultural Plantation Field"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Organic Decorative Leaf */}
            <div className="absolute -bottom-2 -left-4 z-30 pointer-events-none transform -rotate-12 animate-pulse">
              <div className="w-14 h-14 rounded-full bg-lime-400/20 backdrop-blur-md border border-lime-400/50 flex items-center justify-center shadow-lg">
                <Leaf className="w-8 h-8 text-lime-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Center Scroll Indicator Button */}
        <div className="flex flex-col items-center justify-center mt-12 sm:mt-16">
          <button
            onClick={() => scrollToSection('preview-section', 'beranda')}
            className="flex flex-col items-center gap-1.5 text-lime-400 hover:text-white transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full border border-emerald-600/70 group-hover:border-lime-400 bg-[#0d2f21]/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
            <span className="text-xs font-medium tracking-wide text-slate-400 group-hover:text-lime-300">
              Scroll ke bawah
            </span>
          </button>
        </div>
      </section>

      <section id="preview-section" className="relative z-10 bg-slate-950 pt-16 pb-20 border-t border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold mb-3">
                <Activity className="w-3.5 h-3.5" />
                <span>Telemetri & Analitik Terkini</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Pantau Data Tanah Secara{' '}
                <span className="text-lime-400">Real-time</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Dapatkan informasi kondisi tanah terkini langsung dari lapangan melalui sensor IoT yang
                terhubung secara otomatis ke basis data Machine Learning.
              </p>
            </div>

            <button
              onClick={onEnterDashboard}
              className="self-start md:self-auto flex items-center gap-2 px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-lime-500/10 cursor-pointer"
            >
              <span>Buka Dashboard Interaktif</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Live Dashboard Mockup / Preview Card */}
          <div className="bg-[#0e1d17] rounded-3xl p-4 sm:p-7 border border-emerald-800/80 shadow-2xl shadow-emerald-950/80 space-y-6">
            {/* Top Bar of Preview */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-emerald-900/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  🌱
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>AgroPlan Dashboard</span>
                    
                  </div>
                  <div className="text-xs text-slate-400">Ringkasan kondisi tanah 7 parameter terkini</div>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span>Terakhir diperbarui: Baru saja</span>
                <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
              </div>
            </div>

            {/* 7 Parameter Quick Grid Preview (pH, Kelembaban, EC, Suhu, N, P, K) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
              {/* pH Tanah */}
              <div className="bg-[#12281f] p-3.5 rounded-2xl border border-emerald-800/50 hover:border-lime-400/50 transition-colors">
                <div className="text-[11px] font-medium text-slate-400">pH Tanah</div>
                <div className="text-xl font-bold text-white mt-1">6.5</div>
                <div className="text-[10px] font-semibold text-lime-400 mt-1 flex items-center gap-1">
                  <span>Optimal</span>
                  <ChevronUp className="w-3 h-3" />
                </div>
              </div>

              {/* Kelembaban */}
              <div className="bg-[#12281f] p-3.5 rounded-2xl border border-emerald-800/50 hover:border-lime-400/50 transition-colors">
                <div className="text-[11px] font-medium text-slate-400">Kelembaban</div>
                <div className="text-xl font-bold text-white mt-1">65%</div>
                <div className="text-[10px] font-semibold text-lime-400 mt-1 flex items-center gap-1">
                  <span>Optimal</span>
                  <ChevronUp className="w-3 h-3" />
                </div>
              </div>

              {/* EC (dS/m / mS/cm) */}
              <div className="bg-[#12281f] p-3.5 rounded-2xl border border-emerald-700/80 ring-1 ring-emerald-500/30 hover:border-lime-400/50 transition-colors">
                <div className="text-[11px] font-medium text-lime-300">EC (mS/cm)</div>
                <div className="text-xl font-bold text-white mt-1">1.45</div>
                <div className="text-[10px] font-semibold text-emerald-400 mt-1">Normal / Aman</div>
              </div>

              {/* Suhu Tanah */}
              <div className="bg-[#12281f] p-3.5 rounded-2xl border border-emerald-800/50 hover:border-lime-400/50 transition-colors">
                <div className="text-[11px] font-medium text-slate-400">Suhu Tanah</div>
                <div className="text-xl font-bold text-white mt-1">24.5°C</div>
                <div className="text-[10px] font-semibold text-lime-400 mt-1">Optimal</div>
              </div>

              {/* Nitrogen (N) */}
              <div className="bg-[#12281f] p-3.5 rounded-2xl border border-emerald-800/50 hover:border-lime-400/50 transition-colors">
                <div className="text-[11px] font-medium text-slate-400">Nitrogen (N)</div>
                <div className="text-xl font-bold text-white mt-1">45 <span className="text-xs font-normal text-slate-400">mg/kg</span></div>
                <div className="text-[10px] font-semibold text-amber-400 mt-1">Perlu Tambahan</div>
              </div>

              {/* Fosfor (P) */}
              <div className="bg-[#12281f] p-3.5 rounded-2xl border border-emerald-800/50 hover:border-lime-400/50 transition-colors">
                <div className="text-[11px] font-medium text-slate-400">Fosfor (P)</div>
                <div className="text-xl font-bold text-white mt-1">32 <span className="text-xs font-normal text-slate-400">mg/kg</span></div>
                <div className="text-[10px] font-semibold text-lime-400 mt-1">Cukup / Sedang</div>
              </div>

              {/* Kalium (K) */}
              <div className="bg-[#12281f] p-3.5 rounded-2xl border border-emerald-800/50 hover:border-lime-400/50 transition-colors">
                <div className="text-[11px] font-medium text-slate-400">Kalium (K)</div>
                <div className="text-xl font-bold text-white mt-1">220 <span className="text-xs font-normal text-slate-400">mg/kg</span></div>
                <div className="text-[10px] font-semibold text-blue-400 mt-1">Tinggi</div>
              </div>
            </div>

            {/* 2-Column Split: Telemetry Trend & ML Recommendation Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
              {/* Left: Trend Preview */}
              <div className="lg:col-span-7 bg-[#12281f] rounded-2xl p-4 sm:p-5 border border-emerald-800/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">Tren Kelembaban & EC Tanah (7 Hari Terakhir)</span>
                    <span className="text-xs text-lime-400 font-semibold">Sensor Plot A</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Nilai kelembaban stabil di rentang optimal 60-70% dengan tingkat salinitas EC aman.
                  </p>
                </div>

                {/* Visual Chart Wave Graphic */}
                <div className="h-28 sm:h-32 w-full mt-4 flex items-end justify-between gap-2 px-2 pb-2 bg-[#0a1711] rounded-xl border border-emerald-900/60 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-6 h-0.5 border-b border-emerald-500/20 border-dashed" />
                  {[45, 52, 58, 62, 60, 68, 65].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 z-10">
                      <span className="text-[10px] text-lime-400 font-bold">{val}%</span>
                      <div
                        className="w-full max-w-7 rounded-t-md bg-linear-to-t from-emerald-700 to-lime-400 transition-all duration-500"
                        style={{ height: `${val * 0.9}px` }}
                      />
                      <span className="text-[9px] text-slate-500">H-{7 - idx}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Latest Recommendation Preview Card */}
              <div className="lg:col-span-5 bg-[#12281f] rounded-2xl p-4 sm:p-5 border border-emerald-800/60 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">
                      Rekomendasi Pemupukan Terbaru
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Model ML Database
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 mt-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-900/80 text-lime-400 flex items-center justify-center shrink-0 border border-emerald-700">
                      <Sprout className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        Pupuk yang Direkomendasikan: NPK 16-16-16
                      </div>
                      <div className="text-xs font-semibold text-lime-400 mt-0.5">
                        Dosis: 300 kg/ha
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-900/70 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Akurasi Kecocokan Model: <b className="text-lime-400">95%</b>
                  </div>
                  <button
                    onClick={onEnterDashboard}
                    className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow-md"
                  >
                    Lihat Detail Rekomendasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="py-20 max-w-7xl mx-auto px-4 sm:px-8 border-t border-emerald-900/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2f21] border border-emerald-700/60 text-lime-400 text-xs font-bold">
              <Leaf className="w-3.5 h-3.5" />
              <span>Tentang Inovasi AgroPlan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Menghubungkan Sensor Tanah Cerdas dengan{' '}
              <span className="text-lime-400">Keputusan Pemupukan Presisi</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Seringkali petani memberikan pupuk secara berlebihan atau kurang tepat takaran karena tidak
              mengetahui kondisi riil unsur hara di dalam tanah. AgroPlan hadir menjawab tantangan tersebut
              dengan mengintegrasikan <b>Sensor Tanah IoT 7-in-1</b> bersama <b>Algoritma Machine Learning</b>.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0e271c] border border-emerald-800/60">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Bukan Perkiraan Manual</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Data diambil langsung dari probe sensor di kedalaman zona perakaran tanah secara real-time.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0e271c] border border-emerald-800/60">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">Algoritma Machine Learning Khusus Pertanian</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Mencocokkan parameter tanah dengan model agronomi terlatih di database untuk efisiensi biaya pupuk hingga 30%.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-[#0e271c] p-6 rounded-2xl border border-emerald-800/60 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-lime-400">7-in-1</div>
              <div className="text-xs font-bold text-white">Parameter Terukur</div>
              <div className="text-[11px] text-slate-400">NPK, pH, EC, Kelembaban, & Suhu Tanah</div>
            </div>

            <div className="bg-[#0e271c] p-6 rounded-2xl border border-emerald-800/60 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-lime-400">95%</div>
              <div className="text-xs font-bold text-white">Akurasi Rekomendasi</div>
              <div className="text-[11px] text-slate-400">Berdasarkan dataset penelitian agronomi</div>
            </div>

            <div className="bg-[#0e271c] p-6 rounded-2xl border border-emerald-800/60 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-lime-400">100%</div>
              <div className="text-xs font-bold text-white">Otomatisasi Sensor</div>
              <div className="text-[11px] text-slate-400">Tanpa repot mengetik nilai parameter</div>
            </div>

            <div className="bg-[#0e271c] p-6 rounded-2xl border border-emerald-800/60 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-lime-400">24/7</div>
              <div className="text-xs font-bold text-white">Monitoring Telemetri</div>
              <div className="text-[11px] text-slate-400">Siap diakses dari seluruh perangkat</div>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur" className="py-20 bg-[#06140e] border-t border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2f21] border border-emerald-700/60 text-lime-400 text-xs font-bold">
              <Radio className="w-3.5 h-3.5" />
              <span>Fitur Unggulan Sistem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Teknologi Cerdas untuk Petani Modern
            </h2>
            <p className="text-slate-400 text-sm">
              Semua fitur dirancang sesederhana mungkin agar mudah dimengerti dan langsung diterapkan di kebun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#0d271c] p-6 rounded-2xl border border-emerald-800/60 hover:border-lime-400/60 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Monitoring 7 Parameter Tanah</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Membaca kadar Nitrogen, Fosfor, Kalium, pH Tanah, EC, kelembaban, dan suhu tanah secara berkala.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#0d271c] p-6 rounded-2xl border border-emerald-800/60 hover:border-lime-400/60 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Kalkulator Rekomendasi ML</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Menghitung takaran dosis presisi setiap kali Anda akan memupuk.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0d271c] p-6 rounded-2xl border border-emerald-800/60 hover:border-lime-400/60 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Riwayat & Pemetaan Plot Lahan</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Catatan riwayat pemupukan tersimpan rapi di database dengan kemampuan ekspor data ke format CSV untuk arsip perkebunan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CARA KERJA SECTION */}
      <section id="cara-kerja" className="py-20 max-w-7xl mx-auto px-4 sm:px-8 border-t border-emerald-900/40">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d2f21] border border-emerald-700/60 text-lime-400 text-xs font-bold">
            <Sliders className="w-3.5 h-3.5" />
            <span>Alur Kerja Praktis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bagaimana AgroPlan Bekerja?
          </h2>
          <p className="text-slate-400 text-sm">
            4 langkah terintegrasi dari sensor tanah di lapangan hingga rekomendasi pupuk siap aplikasi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0e271c] p-5 rounded-2xl border border-emerald-800/60 relative space-y-3">
            <div className="w-8 h-8 rounded-full bg-lime-400 text-slate-950 font-black text-sm flex items-center justify-center">
              1
            </div>
            <h4 className="text-base font-bold text-white">Sensor Membaca</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sensor tertancap di tanah mengukur 7 parameter penting secara terus menerus.
            </p>
          </div>

          <div className="bg-[#0e271c] p-5 rounded-2xl border border-emerald-800/60 relative space-y-3">
            <div className="w-8 h-8 rounded-full bg-lime-400 text-slate-950 font-black text-sm flex items-center justify-center">
              2
            </div>
            <h4 className="text-base font-bold text-white">Sinkron Database</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Data dikirim secara nirkabel dan tersimpan aman di server cloud database.
            </p>
          </div>

          <div className="bg-[#0e271c] p-5 rounded-2xl border border-emerald-800/60 relative space-y-3">
            <div className="w-8 h-8 rounded-full bg-lime-400 text-slate-950 font-black text-sm flex items-center justify-center">
              3
            </div>
            <h4 className="text-base font-bold text-white">Inferensi ML</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Algoritma Machine Learning menganalisis kebutuhan nutrisi tanaman berdasarkan fase tumbuh.
            </p>
          </div>

          <div className="bg-[#0e271c] p-5 rounded-2xl border border-emerald-800/60 relative space-y-3">
            <div className="w-8 h-8 rounded-full bg-lime-400 text-slate-950 font-black text-sm flex items-center justify-center">
              4
            </div>
            <h4 className="text-base font-bold text-white">Aplikasi Pupuk</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Petani menerima rekomendasi pupuk dan takaran dosis yang jelas dan mudah dipahami.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#040e0a] border-t border-emerald-950 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-lime-400 text-slate-950 flex items-center justify-center font-bold text-xs">
              🌱
            </div>
            <span className="text-white font-bold">AgroPlan</span>
            <span>— Rekomendasi Pemupukan Presisi</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => scrollToSection('beranda', 'beranda')}
              className="hover:text-lime-400 transition-colors cursor-pointer"
            >
              Kembali ke Atas
            </button>
            <span>•</span>
            <button
              onClick={onEnterDashboard}
              className="text-lime-400 font-bold hover:underline cursor-pointer"
            >
              Buka Dashboard
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
