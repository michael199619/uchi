import React from "react";
import Title from "../../../../component/kit/Title";
import ThemeCard from "../../../../component/ThemeCard";
import {CategoriesStyled, ThemesList, Buttons} from "./styled";
import Button from "../../../../component/kit/Button";


const Categories = ({ title, themes  }) => {

    return (
        <CategoriesStyled>
            <Title marginBottom={18}>{title}</Title>
            <ThemesList>
                { themes.map(theme => (
                    <ThemeCard id={theme.id} key={theme.id} title={theme.title} image={theme.image} link={theme.link} linkTitle={theme.linkTitle} rating={theme.rating} />
                )) }

            </ThemesList>
            <Buttons>
                <Button style={{marginRight: 15}}>скрыть</Button>
                <Button>еще больше</Button>
            </Buttons>
        </CategoriesStyled>
    )
};


export default Categories;