import React from "react";
import styled from "styled-components";

const RankingCardCont = styled.div`
    display: flex;
    gap: 20px;
`;

const RankingCard = ({ name, wins, losses }) => {
    const winPercentage = Math.floor(100 * (wins / (wins + losses)));

    return (
        <RankingCardCont>
            <p>{name}</p>
            <p>{wins}</p>
            <p>{losses}</p>
            <p>{winPercentage || 0}%</p>
        </RankingCardCont>
    );
};

export default RankingCard;
