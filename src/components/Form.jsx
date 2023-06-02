"use client";
import { useRef } from "react";
import styled from "styled-components";
import { media } from "@/app/styles/variables";

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
        @media ${media.tablet} {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .ball {
        height: 175px;
        width: 175px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        filter: drop-shadow(15px 10px 4px #333);

        &-1 {
            background: rgb(255, 0, 0);
            background: radial-gradient(
                circle,
                rgba(255, 0, 0, 1) 0%,
                rgba(156, 0, 0, 1) 100%
            );
        }

        &-2 {
            background: rgb(0, 0, 255);
            background: radial-gradient(
                circle,
                rgba(0, 0, 255, 1) 0%,
                rgba(2, 2, 92, 1) 100%
            );
        }

        &-3 {
            background: rgb(52, 49, 49);
            background: radial-gradient(
                circle,
                rgba(52, 49, 49, 1) 0%,
                rgba(0, 0, 0, 1) 100%
            );
        }

        &-4 {
            border: none;

            background: rgb(246, 246, 244);
            background: radial-gradient(
                circle,
                rgba(246, 246, 244, 1) 0%,
                rgba(216, 217, 193, 1) 100%
            );
            overflow: hidden;
        }
    }

    .btn {
        font-family: "Open Sans", sans-serif;
        font-size: 2rem;
        border: none;
        padding: 30px 0;
        width: 100%;
        background: rgb(0, 128, 0);
        background: linear-gradient(
            90deg,
            rgba(0, 128, 0, 1) 0%,
            rgba(18, 187, 18, 1) 50%,
            rgba(0, 128, 0, 1) 100%
        );
        color: white;

        &:hover {
            cursor: pointer;
        }
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

        team1.current.value = "default";
        team1p2.current.value = "default";
        team2.current.value = "default";
        team2p2.current.value = "default";
        winningTeam.current.value = "default";

        onUpdate(players, winners, lossers, results);
    };
    return (
        <FormCont>
            <h2>Add Game Results</h2>
            <div className="form__container">
                <div className="form__team ball ball-1">
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
                <div className="form__team ball ball-2">
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
                <div className="form__winner ball ball-3">
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
                <div className="ball ball-4">
                    <button className="btn" onClick={updateHandler}>
                        Submit
                    </button>
                </div>
            </div>
        </FormCont>
    );
};

export default Form;
