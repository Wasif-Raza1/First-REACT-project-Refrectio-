import { Link } from "react-router-dom";
import React from "react";
import CancelSubcription from "../Modals/cancelSubcription";
import ChangeTeam from "../Modals/changeTeamBilling";


const Billing = () => {
    return (
        <>
            <div className=" px-3 background-container">
                <div className="d-flex justify-content-between mt-4 mb-4">
                    <h5 className=" ">
                        Billing
                    </h5>
                </div>
                <div className="border p-3 mb-4">
                    <h4>
                        Subscription Details
                    </h4>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Plan</th>
                                <td>Team,Monthly</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Start Date </th>
                                <td>July,24,2023</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Next Payment</th>
                                <td colspan="2">$7-August 24,2023</td>
                                <td>  <button className=" btn p-0 " data-bs-toggle="modal" data-bs-target="#exampleModalcancel" data-bs-whatever="@mdo"> <Link className=" text-decoration-none"> Cancel Subcription</Link> </button>
                                    </td>
                            </tr>
                            <tr>
                                <th scope="row">Payment Method</th>
                                <td colspan="2">Visa Card**** **** **** 4242</td>
                                <td> <button className=" btn p-0 " data-bs-toggle="modal" data-bs-target="#exampleModalchange" data-bs-whatever="@mdo"> <Link className=" text-decoration-none"> Change</Link> </button></td>
                                
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="border p-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Status</th>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Ammount</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className=""><p className="account">1</p></td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
            <ChangeTeam />
            <CancelSubcription />
        </>
    )
}
export default Billing;

