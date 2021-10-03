import React from "react";
import { TitleStyled } from './styled';

const Title = ({children, marginBottom, ...rest}) => (
    <TitleStyled marginBottom={marginBottom} {...rest}>{children}</TitleStyled>)

export default Title;