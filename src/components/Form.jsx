"use client";
import { useRef } from "react";
import styled from "styled-components";

const FormCont = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .form__container {
        display: flex;
        gap: 50px;
    }

    .form__team {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .form__winner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

export async function updateData(data, winners, lossers) {
    winners.map((winner) => {
        let curWins = data[winner]["wins"];
        console.log(curWins);
        data[winner]["wins"] = +curWins + 1;
    });

    lossers.map((losser) => {
        let curLosses = data[losser]["losses"];
        data[losser]["losses"] = +curLosses + 1;
    });

    console.log(data);
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
    return postRes.json();
}

const Form = ({ players }) => {
    const users = Object.keys(players);

    const team1 = useRef();
    const team1p2 = useRef();
    const team2 = useRef();
    const team2p2 = useRef();
    const winningTeam = useRef();

    const updateHandler = () => {
        const team = winningTeam.current.selectedOptions[0].value;
        let winners;
        let lossers;

        if (team === "team1") {
            winners = [
                team1.current.selectedOptions[0].value,
                team1p2.current.selectedOptions[0].value,
            ];
            lossers = [
                team2.current.selectedOptions[0].value,
                team2p2.current.selectedOptions[0].value,
            ];
        } else if (team === "team2") {
            winners = [
                team2.current.selectedOptions[0].value,
                team2p2.current.selectedOptions[0].value,
            ];
            lossers = [
                team1.current.selectedOptions[0].value,
                team1p2.current.selectedOptions[0].value,
            ];
        }

        updateData(players, winners, lossers);
    };
    return (
        <FormCont>
            <div className="form__container">
                <div className="form__team">
                    <label htmlFor="team1">Team 1</label>
                    <select name="team1" defaultValue={"default"} ref={team1}>
                        <option value="default" disabled>
                            Select your option
                        </option>
                        {users.map((player, index) => {
                            return (
                                <option key={index} value={player}>
                                    {player}
                                </option>
                            );
                        })}
                    </select>
                    <select
                        name="team1-player2"
                        defaultValue={"default"}
                        ref={team1p2}
                    >
                        <option value="default" disabled>
                            Select your option
                        </option>
                        {users.map((player, index) => {
                            return (
                                <option key={index} value={player}>
                                    {player}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form__team">
                    <label htmlFor="team2">Team 2</label>
                    <select name="team2" defaultValue={"default"} ref={team2}>
                        <option value="default" disabled>
                            Select your option
                        </option>
                        {users.map((player, index) => {
                            return (
                                <option key={index} value={player}>
                                    {player}
                                </option>
                            );
                        })}
                    </select>
                    <select
                        name="team2-player2"
                        defaultValue={"default"}
                        ref={team2p2}
                    >
                        <option value="default" disabled>
                            Select your option
                        </option>
                        {users.map((player, index) => {
                            return (
                                <option key={index} value={player}>
                                    {player}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <div className="form__winner">
                <label htmlFor="winningTeam">Winning Team</label>
                <select
                    name="winningTeam"
                    defaultValue={"default"}
                    ref={winningTeam}
                >
                    <option value="default" disabled>
                        Select your option
                    </option>
                    <option value="team1">Team 1</option>
                    <option value="team2">Team 2</option>
                </select>
            </div>
            <button onClick={updateHandler}>Submit</button>
        </FormCont>
    );
};

export default Form;
