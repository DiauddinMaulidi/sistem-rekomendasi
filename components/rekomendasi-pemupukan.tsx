"use client";

import * as React from "react";

import { useIsMobile } from "@/hooks/use-mobile";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { BadgeCheck, Bookmark, CircleCheck } from "lucide-react";

import { sendPredict } from "@/services/predict";
import { saveRecommendation } from "@/services/recommendation";
import { getLatestSensor } from "@/services/sensor";

import { useNotifications } from "@/components/notification-context";
import { useActiveLahan } from "@/components/active-lahan-context";

interface Props {
  onSaved: () => void;
}

interface PredictionResult {
  jenisPupuk?: string;
  dosis?: number | string;
  sensor_id?: string;
  tanggal?: string;
}

interface SensorResult {
  id?: number;
  sensor_id?: string;
  jenisTanaman?: string;
  kelembaban?: number;
  pH_Tanah?: number;
  suhuTanah?: number;
  nitrogen?: number;
  fosfor?: number;
  kalium?: number;
  ec?: number;
  tanggal?: string;
}

export function RekomendasiPemupukan({ onSaved }: Props) {
  const isMobile = useIsMobile();
  const { lahanAktif } = useActiveLahan();
  const { addNotification } = useNotifications();

  const [timeRange, setTimeRange] = React.useState("2d");
  const [result, setResult] = React.useState<PredictionResult | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [resultInfo, setResultInfo] = React.useState<SensorResult | null>(null);

  /*
   * Menyesuaikan range jika perangkat mobile.
   */
  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  /*
   * Mengambil data sensor terbaru
   * berdasarkan sensor dari lahan aktif.
   */
  const tanamanInfo = React.useCallback(async () => {
    if (!lahanAktif?.sensor) {
      setResultInfo(null);
      return;
    }

    try {
      const info = await getLatestSensor(lahanAktif.sensor);

      console.log("SENSOR AKTIF:", lahanAktif.sensor);
      console.log("DATA SENSOR TERBARU:", info);

      setResultInfo(info);
    } catch (error) {
      console.error("Gagal mengambil sensor terbaru:", error);

      setResultInfo(null);
    }
  }, [lahanAktif?.sensor]);

  /*
   * Jalankan ketika sensor/lahan aktif berubah.
   */
  React.useEffect(() => {
    tanamanInfo();
  }, [tanamanInfo]);

  /*
   * Melakukan prediksi pupuk.
   */
  async function handlePredict() {
    if (!lahanAktif?.sensor) {
      alert("Belum ada sensor pada lahan aktif.");
      return;
    }

    try {
      setLoading(true);

      console.log("Melakukan prediksi untuk sensor:", lahanAktif.sensor);

      const data = await sendPredict(lahanAktif.sensor);

      console.log("HASIL PREDIKSI:", data);

      setResult(data);
    } catch (error) {
      console.error("Gagal melakukan prediksi:", error);

      alert("Gagal melakukan prediksi. Pastikan data sensor tersedia.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!result) {
      alert("Lakukan prediksi terlebih dahulu.");
      return;
    }

    try {
      console.log("DATA REKOMENDASI YANG DISIMPAN:", result);

      const data = await saveRecommendation(result);

      console.log("REKOMENDASI BERHASIL DISIMPAN:", data);

      onSaved();
      addNotification("Rekomendasi telah disimpan");

      alert("Rekomendasi berhasil disimpan");
    } catch (error) {
      console.error("Gagal menyimpan rekomendasi:", error);

      alert("Gagal menyimpan rekomendasi");
    }
  }

  const fertilizerImages: Record<string, string> = {
    Urea: "/urea.jpg",
    MOP: "/mop.jpg",
    NPK: "/npk.jpeg",
    DAP: "/dap.jpg",
    "Zinc Sulphate": "/Zinc_Sulphate.jpg",
    Compost: "/compost.jpg",
  };

  /*
   * Jika belum ada lahan aktif.
   */
  if (!lahanAktif) {
    return (
      <Card className="@container/card bg-green-50 dark:bg-slate-900">
        <CardContent className="flex min-h-60 items-center justify-center">
          <div className="text-center">
            <CircleCheck className="mx-auto mb-3 h-10 w-10 text-slate-400" />

            <h2 className="font-semibold text-slate-700 dark:text-slate-200">
              Belum Ada Lahan Aktif
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Pilih lahan terlebih dahulu untuk melihat rekomendasi pemupukan.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[60%_40%]">
      {/* =====================================================
          CARD REKOMENDASI
      ===================================================== */}
      <Card className="@container/card flex h-full flex-col bg-green-50 dark:bg-slate-900">
        <CardHeader>
          <CardTitle>Rekomendasi Pemupukan</CardTitle>

          <div className="flex items-center rounded-[10px] border-2 border-green-300 bg-green-200 py-3 dark:bg-emerald-400">
            <BadgeCheck className="w-20 shrink-0 text-green-700" />

            <span className="pr-3 text-sm">
              Berdasarkan kondisi tanah saat ini, berikut rekomendasi pemupukan
              yang disarankan.
            </span>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-3 overflow-hidden sm:flex-row">
          {/* GAMBAR PUPUK */}
          <div className="flex shrink-0 items-center justify-center sm:w-52">
            <img
              src={fertilizerImages[result?.jenisPupuk ?? ""] ?? "/default.jpg"}
              alt={result?.jenisPupuk ?? "Pupuk"}
              className="h-40 w-full rounded-md border object-cover sm:h-full"
            />
          </div>

          {/* DETAIL REKOMENDASI */}
          <div className="w-full max-h-64 overflow-y-auto rounded-md border bg-white p-3 dark:text-slate-900">
            <div className="mb-5">
              <span className="font-semibold">
                Pupuk yang direkomendasikan adalah
              </span>

              <h1 className="text-2xl font-bold text-green-900">
                {result?.jenisPupuk ?? "-"}
              </h1>
            </div>

            <div className="mb-5">
              <span className="font-semibold">Dosis yang disarankan</span>

              <h1 className="text-2xl font-bold text-green-900">
                {result?.dosis != null ? `${result.dosis} kg/ha` : "-"}
              </h1>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={handlePredict}
                disabled={loading}
                className="rounded-[10px] bg-emerald-700 p-3 text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Memproses..." : "Prediksi"}
              </button>
            </div>
          </div>
        </CardContent>

        {/* SIMPAN REKOMENDASI */}
        <button
          type="button"
          onClick={handleSave}
          disabled={!result}
          className="mx-4 mt-auto flex items-center justify-center gap-2 rounded-[10px] bg-emerald-700 p-2 text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Bookmark className="h-5 w-5" />
          Simpan Rekomendasi
        </button>
      </Card>

      {/* =====================================================
          CARD INFORMASI LAHAN
      ===================================================== */}
      <Card className="@container/card flex h-full flex-col bg-green-50 dark:bg-slate-900">
        <CardHeader>
          <CardTitle>Informasi Lahan</CardTitle>
        </CardHeader>

        <CardContent className="flex-1 overflow-hidden">
          {/* JENIS TANAMAN */}
          <div className="my-3 flex gap-3">
            <CircleCheck className="mt-0.5 h-8 w-8 shrink-0 text-green-700" />

            <div>
              <h1 className="font-bold">Jenis Tanaman</h1>

              <span>{lahanAktif.tanaman || "-"}</span>
            </div>
          </div>

          {/* LUAS LAHAN */}
          <div className="my-3 flex gap-3">
            <CircleCheck className="mt-0.5 h-8 w-8 shrink-0 text-green-700" />

            <div>
              <h1 className="font-bold">Luas Lahan</h1>

              <span>
                {lahanAktif.luas != null ? `${lahanAktif.luas} ha` : "-"}
              </span>
            </div>
          </div>

          {/* NAMA LAHAN */}
          <div className="my-3 flex gap-3">
            <CircleCheck className="mt-0.5 h-8 w-8 shrink-0 text-green-700" />

            <div>
              <h1 className="font-bold">Lahan</h1>

              <span>{lahanAktif.nama || "-"}</span>
            </div>
          </div>

          {/* SENSOR */}
          <div className="my-3 flex gap-3">
            <CircleCheck className="mt-0.5 h-8 w-8 shrink-0 text-green-700" />

            <div>
              <h1 className="font-bold">Sensor</h1>

              <span>{lahanAktif.sensor || "-"}</span>
            </div>
          </div>

          {/* LOKASI */}
          <div className="my-3 flex gap-3">
            <CircleCheck className="mt-0.5 h-8 w-8 shrink-0 text-green-700" />

            <div>
              <h1 className="font-bold">Lokasi</h1>

              <span>{lahanAktif.lokasi || "-"}</span>
            </div>
          </div>

          {/* TANGGAL SENSOR */}
          <div className="my-3 flex gap-3">
            <CircleCheck className="mt-0.5 h-8 w-8 shrink-0 text-green-700" />

            <div>
              <h1 className="font-bold">Tanggal Data Sensor</h1>

              <span>
                {resultInfo?.tanggal
                  ? new Date(resultInfo.tanggal).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                  : "-"}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
