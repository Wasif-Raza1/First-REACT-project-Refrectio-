import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Workspace = () => {
    const Navigate = useNavigate();
    const Navigate1 = useNavigate();

    const changepage = () => {
        Navigate('/subscription');
    }
    const teamform = () => {
        Navigate1('/subscription');
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5 pt-3 mb-5">
                <img src="/assests/imgs/logo-dark.svg" alt="www" /> &nbsp; &nbsp;
                <h6> Reflectio</h6>
            </div>
            <div className=" text-center"> <h1 className=" mb-4"> Welcome Back!</h1></div>
            <div className="container w-50 p-4 ">
                <div className="border">
                    <h5 className="p-2 "> Teams for <b>was@yomail.com</b></h5>
                    <hr className=" " />
                    <div className="  m-4 d-flex justify-content-between align-content-center work" onClick={teamform}>
                        <div className=" ">
                            <h6> test-re</h6>
                            <p> 1 members</p>
                        </div>
                        <i class="fa-solid fa-arrow-right"></i>

                    </div>
                </div> <br /> <br />
                <div className="border p-4 d-flex align-items-center justify-content-between">
                    <h6 className=" ">Want to use Refractio with a different team?</h6>
                    <button className=" btn btn border" onClick={changepage}>Create another Team</button>

                </div>

                <div className=" p-4 text-center ">
                    <h6 className=" ">Not seeing your team? </h6> <br />
                    <div className=" d-flex justify-content-evenly">
                        <Link to={'/auth/login'} className=" text-decoration-none"> Try a different email / Logout</Link> |
                        <Link to={'/auth/login'} className="text-decoration-none"> Remove account</Link> </div>

                </div>

            </div>

        </>
    )
}
export default Workspace;

