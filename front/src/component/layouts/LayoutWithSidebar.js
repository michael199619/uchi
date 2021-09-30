import React from "react";
import { MainLoyoutStyled, Main, Sidebar } from './styled';

const LayoutWithSidebar = ({ main, sidebar }) => {
    return (
        <MainLoyoutStyled>
            {sidebar && (
                <Sidebar>
                    {sidebar}
                </Sidebar>
            )}
            {main && (
                <Main>
                    {main}
                </Main>
            )}
        </MainLoyoutStyled>
    )
};

export default LayoutWithSidebar;