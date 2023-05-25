"use client";
import { useState } from "react";
import styled, { css } from "styled-components";

const DarkModeCont = styled.div`
    height: 100%;
    width: 100%;
    min-height: 100vh;
    position: relative;

    .dark-mode-btn {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    ${({ $darkMode }) => {
        if ($darkMode) {
            return css`
                background-color: black;

                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                a,
                label {
                    color: white;
                }
            `;
        }
    }}
`;

const DarkMode = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const clickHandler = (e) => {
        setDarkMode((current) => !current);

        console.log(darkMode);
    };

    return (
        <DarkModeCont $darkMode={darkMode}>
            <button className="dark-mode-btn" onClick={clickHandler}>
                Dark Mode
            </button>
            {children}
        </DarkModeCont>
    );
};

export default DarkMode;
