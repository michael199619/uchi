import React from "react";
import {Main} from "./styled";

const MainContent = () => {
    return (
        <>
            <input type="search" placeholder={'Поиск по справочнику'}/>
            <Main>
                Главный контент
            </Main>
        </>

    )
}

export default MainContent