
import React from "react";
import Popup from "../subscription/popup";

const Header = () => {

    return (
        <>
            <div className=" border oppert-contant p-4 ">
                <div className="navbar-brand">
                    <img src="/assests/imgs/logo-dark.svg" className="navbar-brand" />
                    <span className=" fs-6"> Reflectio</span>
                </div>
                {/* -------popup--------- */}
                <Popup/>
                {/*----------- popup----------- */}
            </div>
        </>
    )
}
export default Header;

