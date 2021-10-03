import styled from "styled-components";
import {Link} from "react-router-dom";

export const SubjectCardStyled = styled.article`
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px 39px 12px 28px;
`;

export const TagsList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const TagsItem = styled.li`
    margin-right: 15px;
    margin-bottom: 15px;
    &:last-child {
        margin-right: 0;
    }
`;

export const TagsItemLink = styled(Link)`
    display: block;
    text-align: center;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-decoration: none;
    color: #000000;
    padding: 6px 17px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 18.5px;
`;