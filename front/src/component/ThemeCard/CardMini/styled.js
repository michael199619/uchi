import styled from "styled-components";

export const CardTitle = styled.h2`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin: 0;
`;

export const Rating = styled.div`
    margin-top: auto;
`;

export const CardMiniStyled = styled.div`
    display: flex;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 9px;
    min-height: 80px;
    max-width: 267px;
    overflow: hidden;
`;

export const CardInfo = styled.div`
    flex-basis: 55%;
    padding: 20px 10px 20px 16px;
    display: flex;
    flex-direction: column;
`;


export const CardVisual = styled.div`
    flex-basis: 45%;
    border-left: 1px solid #000000;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #B5B5B5;
        mix-blend-mode: multiply;
        z-index: 5;
    }
`;

export const CardLink = styled.a`
    display: block;
    font-weight: 300;
    font-size: 10px;
    line-height: 11px;
    color: #ADADAD;
`;

export const CardImage = styled.img`
    max-width: 100%;
    height: 100%;
    width: 100%;
    object-fit: cover;
    background: #B5B5B5;
    mix-blend-mode: multiply;
`;

export const Label = styled.label`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    border-radius: 18px;
    z-index: 12;
    background-color: ${(props => props.checked ? 'green' : 'transparent')};
    & > input {
        visibility: hidden;
        width: 0;
        height: 0;
        overflow: hidden;
        opacity: 0;
    }
`;