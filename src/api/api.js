export async function getData() {
    const response = await fetch(
        "https://pool-records-default-rtdb.firebaseio.com/Players.json"
    );
    if (!response.ok) {
        throw new Error("failed to fetch data");
    }
    return response.json();
}
