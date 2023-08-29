import React from "react";
import { Outlet } from "react-router";



const Auth = () => {
    return (
        <>
            <div className="auth-main-div container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white px-4">
                        <div className="logo p-3 mb-4 ">
                            <div className="logo-img d-flex align-items-center ">
                                <img src="/assests/imgs/logo-dark.svg" />
                                <h4 className=""> Reflectio</h4>
                            </div>
                        </div>
                        <Outlet/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 bg-primary position-relative">
                        <div className="main-img d-flex align-item-center main-img-div position-absolute top-50  ">
                            <img src="/assests/imgs/logo192.png " className=" img-fluid main-img" />
                            <h1> Reflectio</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Auth;