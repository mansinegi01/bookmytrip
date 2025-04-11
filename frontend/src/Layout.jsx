import React from "react";
import {Outlet} from "react-router-dom"
import Header from "./components/Header/header";

function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            

        </>
    )
}

export default Layout;