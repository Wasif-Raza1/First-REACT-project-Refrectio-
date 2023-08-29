
import React, { useState } from "react";
import { Link } from "react-router-dom";


// SHORT FORM CODE---------------------------------------
const Recover = () => {
    const [fullName, setName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    }
    );
    console.log(fullName);
    // console.log(fullName.fname);
    // console.log(fullName.lname);
    // console.log(fullName.email);
    // console.log(fullName.phone);

    const inputFeild = (event) => {
        const { value, name } = event.target;
        setName((preValue) => {
            return {
                ...preValue,
                [name]: value,

            }
        })

    }
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className=" text-start">
                <h6 className=" text-primary mb-3"> Recover Password</h6>
                <p > Enter your email address and we'll send you an email with instructions to reset your password.</p>
                <form >
                    <div className="Form">
                    
                        <label for="email"  > Email Address</label>
                        <input type="email" placeholder="Enter The FName" name="fname" onChange={inputFeild}
                            value={fullName.email} />  
                        <div className=" d-flex pb-4">
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                            <label className="px-3 " for="vehicle3"> Remember me</label>
                        </div>
                        <button onClick={onSubmit} >Set Password</button>
                        <div className=" d-flex justify-content-center pt-4">
                        <p> Back to <Link exact to='/auth/login'>Log In</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Recover;