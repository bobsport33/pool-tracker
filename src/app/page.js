import LeaderBoard from "../components/LeaderBoard";
import Form from "../components/Form";
import Hero from "../components/Hero";
import GameSummary from "@/components/GameSummary";
import DarkMode from "@/components/DarkMode";

export async function getData() {
    const response = await fetch(
        "https://pool-records-default-rtdb.firebaseio.com/.json",
        { cache: "force-cache" }
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
            <DarkMode>
                <Hero />
                <LeaderBoard players={playerData} />
                <Form players={playerData} results={gameData} />
                <GameSummary results={gameData} />
            </DarkMode>
        </main>
    );
}
