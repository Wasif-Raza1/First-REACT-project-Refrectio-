

import React from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "../redux.jsx/slice";



const help = () => {
    // let users = useSelector(selectUser);

    console.log( 'w333');
    console.log('wwwwww');
    return (
        <>
        <h1>
            Welcome,<span>Wasif </span>
            <button className=" btn btn"> logOut </button>
        </h1>
        
            {/* <table>
                <tbody>
                    {users.map((element, index) => {
                        <tr key={index}>
                            <td>Email:{element.email}</td>
                            <td>Password:{element.password}</td>
                        </tr>
                    })}
                </tbody>
            </table> */}


        </>
    )
}
export default help;

