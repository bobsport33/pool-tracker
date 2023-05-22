import LeaderBoard from "./components/LeaderBoard";
import Form from "./components/Form";

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

export async function updateData() {}

export default async function Home() {
    const data = await getData();

    const updateRecord = (winners, lossers) => {
        updateData();
    };

    return (
        <main>
            <h1>Pool Scoring Tracker</h1>
            <LeaderBoard players={data} />
            <Form players={data} updateRecord={updateRecord} />
        </main>
    );
}
