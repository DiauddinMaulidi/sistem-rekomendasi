import BASE_URL from "./api";

export async function sendPredict() {

    const response = await fetch(`${BASE_URL}/predict`, {
        method: "POST",
    });

    if (!response.ok) {
        throw new Error("Prediction Failed");
    }

    return await response.json();
}