import React from "react";
import { Logo, Menu, MenuItem, MenuItemLink } from "./styled";

const Sidebar = () => {
    return (
        <>
            <Logo>ЛОГО</Logo>
            <Menu>
                <MenuItem>
                    <MenuItemLink to={'#'}>
                        расписание
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to={'#'}>
                        сообщения
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to={'#'}>
                        справочник
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink to={'#'}>
                        настройки
                    </MenuItemLink>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Sidebar;