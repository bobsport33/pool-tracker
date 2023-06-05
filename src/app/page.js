import GameResults from "@/components/GameResults";

export async function getData() {
    const response = await fetch(
        "https://pool-records-default-rtdb.firebaseio.com/.json",
        { cache: "no-cache" }
    );
    if (!response.ok) {
        throw new Error("failed to fetch data");
    }
    return response.json();
}

export default async function Home() {
    let data = await getData();
    let playerData = data.Players;
    let gameData = data.Games;

    return (
        <main>
            <GameResults player={playerData} game={gameData} />
        </main>
    );
}
