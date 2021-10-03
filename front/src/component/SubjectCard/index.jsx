import React from "react";
import Title from "../kit/Title";
import {SubjectCardStyled, TagsItem, TagsItemLink, TagsList} from "./styled";


const SubjectCard = ({ name, themes }) => {

    return (
        <SubjectCardStyled>
            <Title as={'h2'} marginBottom={'18px'}>{name}</Title>
            <TagsList>
                {themes && themes.map(tag => (
                    <TagsItem key={tag.id}>
                        <TagsItemLink to={'theme/' + tag.id}>{tag.name}</TagsItemLink>
                    </TagsItem>
                ))}
            </TagsList>
        </SubjectCardStyled>
    )
}

export default SubjectCard;
