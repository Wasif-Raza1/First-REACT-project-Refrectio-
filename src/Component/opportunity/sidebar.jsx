
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const logout = () => {
        
        localStorage.removeItem('login');
        navigate('/auth/login');

    }
    return (
        <>
            <div className=" col-lg-2 col-md-2 col-sm-12 sidebar">
                <div className=" d-flex mb-3 pt-3">
                    <img src="/assests/imgs/logo-dark.svg" /> &nbsp;&nbsp;
                    <h3 className=" text-white "> Reflectio</h3>
                </div>
                <div className="   menu ">
                    <div className=" container-fluid items">Manage</div>
                    <Link className="  sidebara" exact to="opportunities"> <i className="fa-solid fa-comment"></i> Opportunities </Link>
                    <Link className="  sidebara" exact to="team"><i className="fa-solid fa-user-plus"></i> Team</Link>

                    <div className=" container-fluid items"> Account</div>
                    <Link className="  sidebara" exact to="billing"> <i className="fa-solid fa-money-bill"></i> Billing </Link>
                    <button className="logout" onClick={logout}><i className="fa-solid fa-right-from-bracket"></i> Logout</button>
                </div>

            </div>
        </>
    )
}
export default Sidebar;

