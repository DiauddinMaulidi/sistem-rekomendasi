import BASE_URL from "./api";

export async function saveRecommendation(data:any){
    const response = await fetch(
        `${BASE_URL}/recommendation/save`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }

    );
    if(!response.ok){
        throw new Error("Save failed");
    }
    return await response.json();

}

export async function lastRecommendation(){
    const response = await fetch(`${BASE_URL}/recommendation/last`);

    if(!response.ok){
        throw new Error("Save failed");
    }

    return await response.json();
}