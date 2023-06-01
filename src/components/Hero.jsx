"use client";
import styled from "styled-components";

const HeroCont = styled.div`
    display: flex;
    justify-content: center;
    grid-row: 1/ 2;
    grid-column: 1 / 3;
`;

const Hero = () => {
    return (
        <HeroCont>
            <h1>Pool Tracker</h1>
        </HeroCont>
    );
};

export default Hero;
