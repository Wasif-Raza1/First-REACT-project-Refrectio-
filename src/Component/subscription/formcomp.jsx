
import React from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router";


const FormComp = () => {
    const Navigate = useNavigate();

    const complete =()=>{
        Navigate('/dashboard');
    }
    return (
        <>
        <Navbar/>

        <div className=" container rounded-3 text-center border mt-2">
            <div className=" fs-1 ">
            <i class="fa-solid fa-check"></i><br/>
            <h4> Subscrption Complete Successfully!</h4>
            <button className=" btn btn bg-primary text-white" type="submit" onClick={complete}> Go To Application</button>
            </div>
        </div>
        </>
        
    )
}
export default FormComp;

