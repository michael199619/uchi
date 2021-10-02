import React from "react";
import {CardInfo, CardVisual, CardMiniStyled, CardTitle, CardImage} from "./styled";



const CardMini = ({ title, image }) => {
    return (
        <CardMiniStyled>
            <CardInfo>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardInfo>
            <CardVisual>
                <CardImage src={image} alt={title} />
            </CardVisual>
        </CardMiniStyled>
    );
};

export default CardMini;