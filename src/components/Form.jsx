"use client";
import { useRef } from "react";
import styled from "styled-components";

const FormCont = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    grid-row: 3 / 4;
    grid-column: 1 / 3;

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

const Form = ({ players, results, onUpdate }) => {
    const users = Object.keys(players);

    const team1 = useRef();
    const team1p2 = useRef();
    const team2 = useRef();
    const team2p2 = useRef();
    const winningTeam = useRef();

    const updateHandler = (e) => {
        e.preventDefault();
        const team = winningTeam.current.selectedOptions[0].value;
        let winners;
        let lossers;

        if (team === "team1") {
            if (
                team1p2.current.selectedOptions[0].value !== "default" &&
                team2p2.current.selectedOptions[0].value !== "default"
            ) {
                winners = [
                    team1.current.selectedOptions[0].value,
                    team1p2.current.selectedOptions[0].value,
                ];
                lossers = [
                    team2.current.selectedOptions[0].value,
                    team2p2.current.selectedOptions[0].value,
                ];
            } else if (team1p2.current.selectedOptions[0].value !== "default") {
                winners = [
                    team1.current.selectedOptions[0].value,
                    team1p2.current.selectedOptions[0].value,
                ];
                lossers = [team2.current.selectedOptions[0].value];
            } else if (team2p2.current.selectedOptions[0].value !== "default") {
                winners = [team1.current.selectedOptions[0].value];
                lossers = [
                    team2.current.selectedOptions[0].value,
                    team2p2.current.selectedOptions[0].value,
                ];
            } else {
                winners = [team1.current.selectedOptions[0].value];
                lossers = [team2.current.selectedOptions[0].value];
            }
        } else if (team === "team2") {
            if (
                team2p2.current.selectedOptions[0].value !== "default" &&
                team1p2.current.selectedOptions[0].value !== "default"
            ) {
                winners = [
                    team2.current.selectedOptions[0].value,
                    team2p2.current.selectedOptions[0].value,
                ];
                lossers = [
                    team1.current.selectedOptions[0].value,
                    team1p2.current.selectedOptions[0].value,
                ];
            } else if (team2p2.current.selectedOptions[0].value !== "default") {
                winners = [
                    team2.current.selectedOptions[0].value,
                    team2p2.current.selectedOptions[0].value,
                ];
                lossers = [team1.current.selectedOptions[0].value];
            } else if (team1p2.current.selectedOptions[0].value) {
                winners = [team2.current.selectedOptions[0].value];
                lossers = [
                    team1.current.selectedOptions[0].value,
                    team1p2.current.selectedOptions[0].value,
                ];
            } else {
                winners = [team2.current.selectedOptions[0].value];
                lossers = [team1.current.selectedOptions[0].value];
            }
        }

        onUpdate(players, winners, lossers, results);
    };
    return (
        <FormCont>
            <h2>Add Game Results</h2>
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
