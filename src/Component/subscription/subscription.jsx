
import Form from "./form";
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./navbar";
import Popup from "./popup";    



const Subscription = () => {
    const Navigate = useNavigate();

    const [data, setdata] = useState({
        value1: '',
    })
    const [price, setprice] = useState({
        value2: '',
    })

    const team = () => {
        const name = 'Team';

        setdata({
            value1: name,
        })
    }
    const totalprice = () => {
        const value = '$7';

        setprice({
            value2: value,
        })
    }

    const Workspace = () => {
        Navigate('/workspace')
    }


    return (
        <div >
            {/* ---------Navbar----------------- */}
            <Navbar />
            {/*--------- Navbar=----------------- */}

            {/*----------------- modal---------- */}
            <Popup />
            {/*------------- modal----------------- */}

            <div className=" container">
                <div className=" p-3">
                    <button className="btn btn-primary px-5" onClick={Workspace}> Back </button>
                </div>
                <div className=" card container-fluid mb-4">
                    <h5 className="pt-2"> Choose Plan</h5> <br />
                    <div className=" row px-2">
                        <div className=" col-lg-8 col-md-12 pb-4">
                            <div className=" team border p-3  ">
                                <div className="d-flex align-items-center ">
                                    <input type="radio" className=" pt-1" onClick={team} />
                                    <h5 className="px-3"> Team</h5>
                                </div>
                                <p className=" px-4">Limit to 24 seats</p>
                            </div>

                            <h5 className="pt-4 pb-4"> Choose Billing Cycle</h5>
                            <div className=" billing-cycle border p-3  ">
                                <div className="d-flex align-items-center ">
                                    <input type="radio" className=" pt-1" onClick={totalprice} />
                                    <h5 className="px-3"> Pay Monthly</h5>
                                </div>
                                <p className=" px-4">$7 / per month</p>
                            </div>

                            <h5 className="pt-4 pb-4"> Payment Method</h5>
                            <div className="">
                                {/*------------- Form----------------------- */}
                                <Form />
                                {/* -------------Form ---------------------------- */}
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-12">
                            <div className=" container-fluid border ">
                                <h6 className=" border-bottom pb-3 pt-3"> SUMMARY OF YOUR PURCHASE </h6>
                                <div className=" d-flex justify-content-between border-bottom pt-3 pb-3 mb-3 ">
                                    <div className=" ">
                                        <h5> Name: {data.value1}</h5>
                                        <p> Price: {price.value2}   &nbsp;/ per month</p>
                                    </div>
                                    <div> <h3 className=" mt-2">  {price.value2}</h3></div>
                                </div>
                                <div className=" border-bottom pt-3 pb-3">
                                    <p> Discounted Code</p>
                                    <div class="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Enter Discounted Code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary  fs-6 px-4" type="button" id="button-addon2">Apply</button>
                                    </div>
                                </div>

                                <div className=" d-flex justify-content-between border-bottom pt-2 pb-2">
                                    <p> Discount: </p>
                                    <p> $0</p>
                                </div>

                                <div className=" d-flex justify-content-between border-bottom pt-2 pb-2">
                                    <p> Sub Total: </p>
                                    <p> {price.value2}</p>
                                </div>

                                <div className=" d-flex justify-content-between border-bottom pt-2 pb-2 mb-3">
                                    <h3> Total: </h3>
                                    <p> {price.value2}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Subscription;