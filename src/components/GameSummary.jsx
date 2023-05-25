"use client";

import React from "react";
import styled from "styled-components";

const SummaryCont = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    padding-bottom: 50px;
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
                            On {formattedString} {resultString}
                        </p>
                    );
                })}
            {!results && <p>No recent game results</p>}
        </SummaryCont>
    );
};

export default GameSummary;
