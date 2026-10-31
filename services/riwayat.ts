import BASE_URL from "./api";
const API_URL = process.env.NEXT_PUBLIC_API_URL_HOST;

export async function getLatestRek() {
  const response = await fetch(`${API_URL}/sensor`);
  if (!response.ok) {
    throw new Error("Gagal mengambil data sensor");
  }

  return await response.json();
}
