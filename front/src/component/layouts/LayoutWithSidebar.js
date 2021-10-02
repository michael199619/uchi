import React from "react";
import { MainLoyoutStyled } from './styled';
import Header from "../Header";

const LayoutWithSidebar = ({ main, sidebar }) => {
    return (
        <MainLoyoutStyled>
            {sidebar && (
                <aside>
                    {sidebar}
                </aside>
            )}

            <div>
                <Header />
                {main && (
                    <main>
                        {main}
                    </main>
                )}
            </div>

        </MainLoyoutStyled>
    )
};

export default LayoutWithSidebar;