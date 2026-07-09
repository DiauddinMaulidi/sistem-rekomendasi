import BASE_URL from "./api";

export async function getLatestSensor() {

    const response = await fetch(`${BASE_URL}/sensor/latest`);

    if (!response.ok) {
        throw new Error("Gagal mengambil data sensor");
    }

    return await response.json();
}