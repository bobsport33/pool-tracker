import React from "react";
import styled from "styled-components";
import { media } from "@/app/styles/variables";

const RankingCardCont = styled.div`
    display: flex;
    gap: 20px;
    width: fit-content;
    @media ${media.mobile} {
        gap: 10px;
    }

    .ranking__name {
        width: 70px;
        text-align: center;
        color: rgb(5, 5, 5);
    }

    .ranking__number {
        width: 50px;
        text-align: center;
        color: rgb(5, 5, 5);
    }

    .ranking__percentage {
        width: 50px;
        text-align: center;
        color: rgb(5, 5, 5);
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
