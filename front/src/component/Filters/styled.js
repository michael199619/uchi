import styled from "styled-components";

export const FiltersStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
`;

export const FilterItem = styled.li`
    margin: 0 10px 0 0;
    display: flex;
    align-items: center;
    padding: 6px 14px;
    background-color: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 18.5px;
    &:last-child {
        margin-right: 0;
    }
`;

export const FilterButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    background-color: #FFFFFF;
`;

