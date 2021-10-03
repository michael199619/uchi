import styled from "styled-components";


export const HeaderStyled = styled.div`
    display: grid;
    grid-template-columns: 480px 1fr;
    grid-gap: 16px 16px;
    margin-bottom: 16px;
`;

export const BodyStyled = styled.div`
    display: grid;
    grid-row-gap: 16px;
`;

export const FilterThemeCell = styled.div`
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    overflow-x: auto;
    padding: 12px 17px 12px 27px;
    grid-column-start: 1;
    grid-column-end: 3;
`;

export const FilterLettersCell = styled.div`
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px 17px 12px 27px;
`;


export const SortingCell = styled.div`
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px 17px 12px 27px;
`;