import React from "react";
import { generateAlphabets } from "../../helpers/alpabet";
import { AlphabetStyled, AlphabetItem, AlphabetButton } from './styled';
const AlphabetFilter = () => {
    return (
        <AlphabetStyled>
            {generateAlphabets().map(letter => (
                <AlphabetItem key={letter}>
                    <AlphabetButton>
                        {letter}
                    </AlphabetButton>
                </AlphabetItem>
                ))}
        </AlphabetStyled>
    )
}

export default AlphabetFilter;
