import BASE_URL from "./api"

export async function getLahanById(id: string) {
    const result = await fetch(`${BASE_URL}/lahan/edit/${id}`)

    if(!result.ok) {
        throw new Error("Gagal mengambil data lahan")
    }
    return result.json()
}