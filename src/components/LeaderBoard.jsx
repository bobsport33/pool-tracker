"use client";

import React from "react";
import RankingCard from "./RankingCard";
import styled from "styled-components";

const LeaderBoardCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
