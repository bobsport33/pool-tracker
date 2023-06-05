import GameResults from "@/components/GameResults";
import axios from "axios";
// export async function getData() {
//     const response =
//     if (!response.ok) {
//         throw new Error("failed to fetch data");
//     }
//     return response.json();
// }

export default async function Home() {
    let data = (
        await axios.get(
            "https://pool-records-default-rtdb.firebaseio.com/.json"
        )
    ).data;
    let playerData = data.Players;
    let gameData = data.Games;

    return (
        <main>
            <GameResults player={playerData} game={gameData} />
        </main>
    );
}
