

import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { Outlet } from "react-router";


const DashBoard = () => {
    return (
        <>
            <div className=" container-fluid" >
                <div className=" row  ">
                    {/* ---------SideBar------------ */}
                    <Sidebar />
                    {/* ---------SideBar---------- */}
                    <div className=" col-lg-10 col-md-10 col-sm-12 p-0">
                        <Header />
                        {/* ----- ------- */}
                        <Outlet/>
                        {/* ------ ------- */}
                    </div>

                </div>
            </div>
        </>
    )
}
export default DashBoard;

