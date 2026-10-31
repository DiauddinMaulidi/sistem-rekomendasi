// import BASE_URL from "./api";
const API_URL = process.env.NEXT_PUBLIC_API_URL_HOST;

export async function sendPredict(sensorId: string) {
  const response = await fetch(
    `${API_URL}/predict/${encodeURIComponent(sensorId)}`,
    {
      method: "POST",
    },
  );

  if (!response.ok) {
    throw new Error("Gagal melakukan prediksi");
  }

  return response.json();
}
