import styled from "styled-components";

export const HeaderStyled = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 60px;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    margin-right: 15px;
`;

export const SearchIcon = styled.div`
    width: 24px;
    margin-right: 5px;
`;

export const SearchInput = styled.input`
    flex-grow: 1;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 28px;
    line-height: 32px;
    color: #9E9E9E;
    &:placeholder {
        font-size: 28px;
        line-height: 32px;
        color: #9E9E9E;
    }
`;

export const Avatar = styled.div`
    width: 80px;
    height: 80px;
    background-color: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 40px;
`;