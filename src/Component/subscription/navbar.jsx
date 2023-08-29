
import React from "react";



const Navbar = () => {

    return (
        <>
          <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src="/assests/imgs/logo-dark.svg" className="navbar-brand" />
                        <span className=" fs-6"> Reflectio</span>
                    </div>

                    <form className="d-flex border1">
                        <div className="dropdown ">
                            <button className="btn dropdown-1 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1">
                                <li className=""><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#">Edit profile</a></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </nav>
    
        </>
    )
}
export default Navbar;

