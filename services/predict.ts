import BASE_URL from "./api"

export async function getPredict() {
    const response = await fetch(`${BASE_URL}/predict`);

    if (!response.ok) {
        throw new Error("Prediction Failed");
    }

    return response.json()
} 

export async function sendPredict() {
    const response = await fetch(`${BASE_URL}/predict`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Prediction Failed");
    }

    const data = await response.json();
    return data.prediction;
} 