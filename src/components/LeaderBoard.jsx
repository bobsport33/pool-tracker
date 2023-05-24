"use client";

import React from "react";
import RankingCard from "./RankingCard";
import styled from "styled-components";

const LeaderBoardCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    .leaderboard__container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const LeaderBoard = ({ players }) => {
    const users = Object.keys(players);

    return (
        <LeaderBoardCont>
            <h2>Leaderboard</h2>
            <div className="leaderboard__container">
                {users.map((player, index) => {
                    return (
                        <RankingCard
                            key={index}
                            name={player}
                            wins={players[player].wins}
                            losses={players[player].losses}
                        />
                    );
                })}
            </div>
        </LeaderBoardCont>
    );
};

export default LeaderBoard;
