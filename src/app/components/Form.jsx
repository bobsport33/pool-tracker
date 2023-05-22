"use client";
import { useRef } from "react";
import styled from "styled-components";

const FormCont = styled.div`
    display: flex;
    flex-direction: column;

    .form__contianer {
        display: flex;
    }
`;

const Form = ({ players, updateRecord }) => {
    const users = Object.keys(players);

    const team1 = useRef();
    const team2 = useRef();
    const winningTeam = useRef();

    const updateHandler = (e) => {
        e.preventDefault();
        const team = winningTeam.team1.current.selectedOptions[0].value;
        let winners;
        let lossers;

        if (team === "team1") {
            winners = team1.current.selectedOptions[0].value;
            lossers = team2.current.selectedOptions[0].value;
        } else if (team === "team2") {
            winners = team2.current.selectedOptions[0].value;
            lossers = team1.current.selectedOptions[0].value;
        }
        updateRecord(winners, lossers);
    };
    return (
        <FormCont>
            <div className="form__container">
                <div>
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
                </div>
                <div>
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
                </div>
            </div>

            <div>
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
