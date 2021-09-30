import React from "react";
import LayoutWithtSidebar from "../../component/layouts/LayoutWithSidebar";
import Sidebar from "./Sidebar";
import MainContent from "./Content";


const Main = () => {
    return (
        <LayoutWithtSidebar sidebar={ <Sidebar /> } main={ <MainContent /> } />
    )
}

export default Main;