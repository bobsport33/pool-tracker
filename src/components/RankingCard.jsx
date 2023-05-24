import React from "react";
import styled from "styled-components";

const RankingCardCont = styled.div`
    display: flex;
    gap: 20px;
    width: fit-content;

    .ranking__name {
        width: 50px;
    }

    .ranking__number {
        width: 20px;
    }

    .ranking__percentage {
        width: 25px;
    }
`;

const RankingCard = ({ name, wins, losses }) => {
    const winPercentage = Math.floor(100 * (wins / (wins + losses)));

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
