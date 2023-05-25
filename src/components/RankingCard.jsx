import React from "react";
import styled from "styled-components";

const RankingCardCont = styled.div`
    display: flex;
    gap: 20px;
    width: fit-content;

    .ranking__name {
        width: 70px;
        text-align: center;
    }

    .ranking__number {
        width: 50px;
        text-align: center;
    }

    .ranking__percentage {
        width: 135px;
        text-align: center;
    }
`;

const RankingCard = ({ name, wins, losses, winPercentage }) => {
    return (
        <RankingCardCont>
            <p className="ranking__name">{name}</p>
            <p className="ranking__number">{wins}</p>
            <p className="ranking__number">{losses}</p>
            <p className="ranking__percentage">{winPercentage || 0}%</p>
        </RankingCardCont>
    );
};

export default RankingCard;
