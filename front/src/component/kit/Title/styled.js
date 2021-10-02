import styled from "styled-components";

export const TitleStyled = styled.p`
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    color: #000000;
    margin-top: 0;
    margin-bottom: ${props => props.marginBottom ? props.marginBottom + 'px' : 0};
`;