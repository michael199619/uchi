import React from "react";
import {ButtonStyled} from "./styled";


const Button = ({ children, onClick, ...rest }) => {
    return (
        <ButtonStyled onClick={onClick} {...rest}>{children}</ButtonStyled>
    )
}

export default Button;
