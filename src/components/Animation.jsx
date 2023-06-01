import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "./poolBall.json";
import styled, { css } from "styled-components";

const AnimationCont = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2c8257;
    transition: transform 0.8s;
`;

const Animation = ({ onFinish }) => {
    // const [finished, setFinished] = useState(false);

    // const finishAnimationhandler = () => {
    //     setFinished(true);
    // };

    return (
        <AnimationCont>
            <Lottie
                animationData={animationData}
                autoplay={true}
                loop={false}
                onComplete={onFinish}
            />
        </AnimationCont>
    );
};

export default Animation;
