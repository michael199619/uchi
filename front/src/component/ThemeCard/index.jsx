import React, {useState} from "react";
import {CardInfo, CardVisual, ThemeCardStyled, CardTitle, CardLink, CardImage, Rating, Label} from "./styled";
import {addItem, addItemId, removeItem, removeItemId} from "../../models";



const ThemeCard = ({ title, link, linkTitle, rating, image, id }) => {
    const [checked, setChecked] = useState(false);
    const handleClickCheckbox = (v) => {
        const checked = v.target.checked
        if (checked) {
            addItem({title, image, id});
            addItemId(id);

        } else {
            console.log('addItem')
            removeItem({id});
            removeItemId(id);
        }
        setChecked(checked);
    }
    return (
        <ThemeCardStyled>
            <CardInfo>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardLink href={link} target={'_blank'}>{linkTitle}</CardLink>
                <Rating>
                    { rating }
                </Rating>

            </CardInfo>
            <CardVisual>
                <Label checked={checked}>
                    <input type="checkbox" value={checked} onChange={handleClickCheckbox}/>
                </Label>
                <CardImage src={image} alt={title} />
            </CardVisual>
        </ThemeCardStyled>
    );
};

export default ThemeCard;