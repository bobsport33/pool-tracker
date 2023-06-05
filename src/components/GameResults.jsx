"use client";
import React, { useEffect, useState } from "react";
import LeaderBoard from "../components/LeaderBoard";
import Form from "../components/Form";
import Hero from "../components/Hero";
import GameSummary from "@/components/GameSummary";
import Animation from "./Animation";
import styled from "styled-components";
import { media } from "../app/styles/variables";
import GlobalStyle from "@/app/styles/GlobalStyle";
import axios from "axios";

const GameCont = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    .background__image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
        height: 100%;
        width: 100%;

        @media ${media.tablet} {
            transform: rotate(90deg);
        }
    }

    .results-grid {
        padding: 150px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 30px;
        justify-items: center;

        @media ${media.tablet} {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
        }
    }
`;

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

const GameResults = () => {
    const [playerData, setPlayerData] = useState({});
    const [gameData, setGameData] = useState({});
    const [animationFinished, setAnimationFinished] = useState(false);

    const getData = async () => {
        let data = (
            await axios.get(
                "https://pool-records-default-rtdb.firebaseio.com/.json"
            )
        ).data;
        setPlayerData(data.Players);
        setGameData(data.Games);
    };

    useEffect(() => {
        getData();
    }, []);

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

    const animationHandler = () => {
        setAnimationFinished(true);
    };
    return (
        <GameCont>
            <GlobalStyle />
            <Animation onFinish={animationHandler} />
            <div className="background__image"></div>
            <div className="results-grid">
                <Hero />
                <LeaderBoard players={playerData} />
                <Form
                    players={playerData}
                    results={gameData}
                    onUpdate={updateResultsHandler}
                />
                <GameSummary results={gameData} />
            </div>
        </GameCont>
    );
};

export default GameResults;
