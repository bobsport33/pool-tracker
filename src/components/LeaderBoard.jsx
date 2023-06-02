"use client";

import React from "react";
import RankingCard from "./RankingCard";
import styled from "styled-components";

const LeaderBoardCont = styled.section`
    padding: 30px;
    border-radius: 30px;
    box-shadow: 12px 12px 2px 1px rgba(68, 69, 68, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;

    background: rgb(212, 213, 212);
    background: linear-gradient(
        90deg,
        rgba(212, 213, 212, 1) 0%,
        rgba(160, 184, 172, 1) 50%,
        rgba(212, 213, 212, 1) 100%
    );

    h2 {
        color: rgb(5, 5, 5);
    }

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
                <RankingCard
                    key={"titles"}
                    name="Name"
                    wins="Wins"
                    losses="Losses"
                    winPercentage={"Win Percentage"}
                />
                {users.map((player, index) => {
                    return (
                        <RankingCard
                            key={index}
                            name={player}
                            wins={players[player].wins}
                            losses={players[player].losses}
                            winPercentage={Math.floor(
                                (100 * players[player].wins) /
                                    (players[player].wins +
                                        players[player].losses)
                            )}
                        />
                    );
                })}
            </div>
        </LeaderBoardCont>
    );
};

export default LeaderBoard;
