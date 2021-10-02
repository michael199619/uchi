import styled from "styled-components";
import {Link} from "react-router-dom";

export const Logo = styled.div`
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: #ADADAD;
    padding: 22px;
    text-align: center;
    width: 100%;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 9px;
    margin-bottom: 34px;
    position: sticky;
    top: 70px;
`;

export const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: sticky;
    top: 182px;
`;

export const MenuItem = styled.li`
    text-align: center;
    color: #000000;
    margin-bottom: 15px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const MenuItemLink = styled(Link)`
    display: block;
    padding: 13px 19px 17px;
    text-align: center;
    width: 100%;
    font-size: 20px;
    line-height: 23px;
    background-color: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 9px;
    text-decoration: none;
`;