import LeaderBoard from "../components/LeaderBoard";
import Form from "../components/Form";

export async function getData() {
    const response = await fetch(
        "https://pool-records-default-rtdb.firebaseio.com/Players.json",
        { cache: "force-cache" }
    );
    if (!response.ok) {
        throw new Error("failed to fetch data");
    }
    return response.json();
}

export default async function Home() {
    let data = await getData();

    return (
        <main>
            <h1>Pool Scoring Tracker</h1>
            <LeaderBoard players={data} />
            <Form players={data} />
        </main>
    );
}
