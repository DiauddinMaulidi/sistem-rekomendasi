import BASE_URL from "./api";
const API_URL = process.env.NEXT_PUBLIC_API_URL_HOST;

export async function statisticData() {
  const response = await fetch(`${API_URL}/statistic`);
  if (!response.ok) {
    throw new Error("Gagal mengambil data sensor");
  }

  return await response.json();
}
