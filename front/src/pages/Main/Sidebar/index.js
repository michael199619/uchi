import React from "react";
import { Logo, Menu, MenuItem, MenuItemLink } from "./styled";

const Sidebar = () => {
    return (
        <>
            <Logo>ЛОГО</Logo>
            <Menu>
                <MenuItem>
                    <MenuItemLink>
                        расписание
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                        сообщения
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                        справочник
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink>
                        настройки
                    </MenuItemLink>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Sidebar;