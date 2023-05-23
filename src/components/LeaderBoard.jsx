"use client";

import React from "react";
import RankingCard from "./RankingCard";

const LeaderBoard = ({ players }) => {
    const users = Object.keys(players);

    return (
        <div>
            <h2>Leaderboard</h2>
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
    );
};

export default LeaderBoard;
