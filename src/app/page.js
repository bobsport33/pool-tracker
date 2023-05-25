"use client";
import { useState } from "react";
import styled, { css } from "styled-components";

import LeaderBoard from "../components/LeaderBoard";
import Form from "../components/Form";
import Hero from "../components/Hero";
import GameSummary from "@/components/GameSummary";
import DarkMode from "@/components/DarkMode";

const MainCont = styled.main`
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 100vh;
`;

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
    const [darkMode, setDarkMode] = useState(false);
    let data = await getData();
    let playerData = data.Players;
    let gameData = data.Games;

    return (
        <MainCont $darkMode={darkMode}>
            <DarkMode>
                <Hero />
                <LeaderBoard players={playerData} />
                <Form players={playerData} results={gameData} />
                <GameSummary results={gameData} />
            </DarkMode>
        </MainCont>
    );
}
