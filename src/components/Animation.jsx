import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "./poolBall.json";
import styled, { css } from "styled-components";

const AnimationCont = styled.div`
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2c8257;
    transition: transform 0.8s;

    ${({ $finished }) => {
        if ($finished) {
            return css`
                transform: translateY(-100vh);
            `;
        }
    }}
`;

const Animation = () => {
    const [finished, setFinished] = useState(false);

    const finishAnimationHandler = () => {
        setFinished(true);
    };

    return (
        <AnimationCont $finished={finished}>
            <Lottie
                animationData={animationData}
                autoplay={true}
                loop={false}
                onComplete={finishAnimationHandler}
            />
        </AnimationCont>
    );
};

export default Animation;
