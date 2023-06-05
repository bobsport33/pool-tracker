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
    return (
        <main>
            <GameResults />
        </main>
    );
}
