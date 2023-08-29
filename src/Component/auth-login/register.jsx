
import React, { useState } from "react";
import { Link } from "react-router-dom";


// SHORT FORM CODE---------------------------------------
const Signup = () => {
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
                <h6 className=" text-primary mb-3"> Sign up</h6>
                <form >
                    <div className="Form">

                        <label for="email"  > First Name</label>
                        <input type="email" placeholder="Enter The FName" name="fname" onChange={inputFeild}
                            value={fullName.fname} />  
                        <label for="email"  > Last Name</label>
                        <input type="password" placeholder="Enter The LName" name="lname" onChange={inputFeild}
                            value={fullName.lname} /> 
                        <label for="email"  > Email Address</label>
                        <input type="email" placeholder="Enter The FName" name="fname" onChange={inputFeild}
                            value={fullName.email} />  
                        <label for="email"  > Password</label>
                        <input type="password" placeholder="Enter The LName" name="lname" onChange={inputFeild}
                            value={fullName.phone} /> 
                        <div className=" d-flex pb-4">
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                            <label className="px-3 " for="vehicle3"> I accept <a href=""> Term and Condition</a></label>
                        </div>
                        <button onClick={onSubmit} >Sign Up</button>
                        <div className=" d-flex justify-content-center pt-4">
                            <p> Already have account? <Link exact to='/auth/login'>Log In</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Signup;