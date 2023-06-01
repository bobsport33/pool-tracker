"use client";
import styled from "styled-components";

const HeroCont = styled.div`
    display: flex;

    justify-content: center;
    padding: 50px;
`;

const Hero = () => {
    return (
        <HeroCont>
            <h1>Pool Tracker</h1>
        </HeroCont>
    );
};

export default Hero;
