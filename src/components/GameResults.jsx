"use client";
import React, { useState } from "react";
import LeaderBoard from "../components/LeaderBoard";
import Form from "../components/Form";
import Hero from "../components/Hero";
import GameSummary from "@/components/GameSummary";
import DarkMode from "@/components/DarkMode";

export async function updatePlayers(data, winners, lossers, results) {
    winners.map((winner) => {
        if (winner === "default") {
            return;
        }
        let curWins = data[winner]["wins"];

        data[winner]["wins"] = +curWins + 1;
    });

    lossers.map((losser) => {
        let curLosses = data[losser]["losses"];
        data[losser]["losses"] = +curLosses + 1;
    });

    const postRes = await fetch(
        "https://pool-records-default-rtdb.firebaseio.com/Players.json",
        {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );
    if (!postRes.ok) {
        throw new Error("failed to post data");
    }

    if (results === "") {
        results = {};
    }

    return postRes.json();
}

export async function updateGames(data, winners, lossers, results) {
    winners.map((winner) => {
        if (winner === "default") {
            return;
        }
        let curWins = data[winner]["wins"];

        data[winner]["wins"] = +curWins + 1;
    });

    lossers.map((losser) => {
        let curLosses = data[losser]["losses"];
        data[losser]["losses"] = +curLosses + 1;
    });

    const gameSummary = `${winners} beat ${lossers}`;
    const time = new Date().toString();
    results[time] = gameSummary;

    const gameRes = await fetch(
        "https://pool-records-default-rtdb.firebaseio.com/Games.json",
        {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(results),
        }
    );
    if (!gameRes.ok) {
        throw new Error("failed to post data");
    }
    return gameRes.json();
}

const GameResults = ({ player, game }) => {
    const [playerData, setPlayerData] = useState(player);
    const [gameData, setGameData] = useState(game);

    const updateResultsHandler = async (data, winners, lossers, results) => {
        const newPlayersData = await updatePlayers(
            data,
            winners,
            lossers,
            results
        );
        const newGameData = await updateGames(data, winners, lossers, results);
        setPlayerData(newPlayersData);
        setGameData(newGameData);
    };
    return (
        <>
            <DarkMode>
                <Hero />
                <LeaderBoard players={playerData} />
                <Form
                    players={playerData}
                    results={gameData}
                    onUpdate={updateResultsHandler}
                />
                <GameSummary results={gameData} />
            </DarkMode>
        </>
    );
};

export default GameResults;