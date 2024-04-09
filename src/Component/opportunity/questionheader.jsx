import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../modal";
import DeleteModal from "../Modals/deletecard";

const Questionheader = () => {
    const { id } = useParams();
    // console.log(id);
    const [Name, setName] = useState();
    // console.log(Name);
    const storedData = JSON.parse(localStorage.getItem('opportunity_data'));
    useEffect(() => {
        const matchedName = storedData.find(item => item.id === parseInt(id));
        setName(matchedName);
        // console.log(matchedName); 
    }, []);


    if (Name) {
        return (
            <>
                <div className="p-4">
                    <div className=" d-flex justify-content-between mb-4">
                        <div>
                            <h5 > {Name.name}  <button className="btn btn-dark"> Draft</button> </h5>
                            <Modal />
                            {/* <a href="###"> Add Participants</a> */}
                        </div>
                        <div className=''>
                            <button className=" btn btn-info " data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Delete</button>
                            <DeleteModal />
                            <button className=" btn border mx-3 ">Save as Draft</button>
                            <button className=" btn btn-dark" type="submit">Publish</button>
                        </div>
                    </div>
                    <p>To publish an Opportunity you need at least one question for Comprehension and one for Quality of Idea-Response. You need to select the Team Members you want to respond with an Idea.</p>
                    <div className=" secondary-menu">
                        <Link to={'questions'} className="  text-decoration-none "> Question</Link>
                        <Link to={'info'} className=" text-decoration-none "> Information</Link>
                    </div>
                    <hr className="mx-3 hor-line" />
                </div>
            </>
        )
    }
}
export default Questionheader;

