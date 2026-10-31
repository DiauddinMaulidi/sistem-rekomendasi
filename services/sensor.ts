// import BASE_URL from "./api";
const API_URL = process.env.NEXT_PUBLIC_API_URL_HOST;

export async function getLatestSensor(sensorId: string) {
  const response = await fetch(
    `${API_URL}/sensor/latest/${encodeURIComponent(sensorId)}`,
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil sensor terbaru");
  }

  return response.json();
}

export async function getGrafikSensor(sensorId: string) {
  const response = await fetch(
    `${API_URL}/sensor/grafik/${encodeURIComponent(sensorId)}`,
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil grafik sensor");
  }

  return response.json();
}
