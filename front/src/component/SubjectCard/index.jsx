import React from "react";
import Title from "../kit/Title";
import {SubjectCardStyled, TagsItem, TagsItemLink, TagsList} from "./styled";




const SubjectCard = ({ name, tags, categoryId }) => {

    return (
        <SubjectCardStyled>
            <Title as={'h2'} marginBottom={'18px'}>{name}</Title>
            <TagsList>
                {tags && tags.map(tag => (
                    <TagsItem key={tag.id}>
                        <TagsItemLink to={'/find?q=' + tag}>{tag}</TagsItemLink>
                    </TagsItem>
                ))}
            </TagsList>
        </SubjectCardStyled>
    )
}

export default SubjectCard;
