"use client";

import React from "react";
import styled from "styled-components";
import { media } from "@/app/styles/variables";

const SummaryCont = styled.section`
    display: flex;
    flex-direction: column;

    justify-content: center;
    grid-row: 2/ 3;
    grid-column: 2/3;
    padding: 30px;
    border-radius: 30px;
    box-shadow: 12px 12px 2px 1px rgba(68, 69, 68, 0.2);

    background: rgb(212, 213, 212);
    background: linear-gradient(
        90deg,
        rgba(212, 213, 212, 1) 0%,
        rgba(160, 184, 172, 1) 50%,
        rgba(212, 213, 212, 1) 100%
    );

    h2,
    p {
        color: rgb(5, 5, 5);
    }

    h2 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const GameSummary = ({ results }) => {
    let sortedGameTimes;
    if (results) {
        const gameTimes = Object.keys(results);

        sortedGameTimes = gameTimes.sort((a, b) => {
            const timeA = new Date(a);
            const timeB = new Date(b);
            return timeB.getTime() - timeA.getTime();
        });
    }

    return (
        <SummaryCont>
            <h2>Recent Game Results</h2>

            {results &&
                sortedGameTimes.map((time, index) => {
                    if (index > 9) {
                        return;
                    }
                    let dateObj = new Date(time);
                    const formattedString = dateObj.toLocaleString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                    });
                    const resultString = results[time].replace(
                        /(\w+),(\w+)/g,
                        "$1 and $2"
                    );
                    return (
                        <p key={dateObj}>
                            -On {formattedString} {resultString}
                        </p>
                    );
                })}
            {!results && <p>No recent game results</p>}
        </SummaryCont>
    );
};

export default GameSummary;
