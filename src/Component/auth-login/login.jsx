
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { adduser } from "../redux.jsx/slice";



// SHORT FORM CODE---------------------------------------
const Login = () => {
    // const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [login, setlogin] = useState({
        email: "",
        password: "",
    }
    );
    console.log(login);
    // console.log(login.fname);
    // console.log(login.lname);
    // console.log(login.email);
    // console.log(login.phone);

    const inputFeild = (event) => {
        const { value, name } = event.target;
        setlogin((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })

    }
    const onSubmit = (e) => {
        e.preventDefault();
        // dispatch(adduser({
        //     email:login.email,
        //     password:login.password,
        // }));
        Navigate('/workspace');
        localStorage.setItem('login', JSON.stringify(login));
    }

    return (
        <>
            <div className=" text-start">
                <h6 className=" text-primary mb-3"> Log In</h6>
                <p > Enter your email address and password to access account.</p>
                <form onSubmit={onSubmit} method="post" >
                    <div className="Form">

                        <label for="email"  > Email Address</label>
                        <input type="email" placeholder="Enter The Email" name="email" onChange={inputFeild}
                            value={login.email} required />
                        <div className=" d-flex justify-content-between">
                            <label for="password"  > Password</label>
                            <Link exact to='/auth/recover'>Forget Your Password?</Link>
                        </div>
                        <input type="password" placeholder="Enter The Password" name="password" onChange={ inputFeild}
                            value={login.password}  required />
                        <div className=" d-flex pb-4">
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                            <label className="px-3 " for="vehicle3"> Remember me</label>
                        </div>
                        <button type="submit" >Log In</button>
                        <div className=" d-flex justify-content-center pt-4">
                            <p> Not have an account? <Link exact to='/auth/register'>Sign up</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;