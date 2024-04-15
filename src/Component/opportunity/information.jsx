import React, { useEffect, useState } from "react";
import InfoModal from "../Modals/infoModal";
import { useParams } from "react-router";

const Information = (props) => {
    const {id}  = useParams();
    const [Information , setinformation] =useState();
    console.log(Information);
    const getData = JSON.parse(localStorage.getItem('opportunity_data'));

    useEffect(()=>{
        const findID = getData.find((items)=> items.id === parseInt(id) );
        setinformation(findID);
    },[]);

    const runtimeUpdate=( update)=>{
        setinformation(update)
    }

   if (Information) {
    return (
        <>
            <div className="card m-4 background-container">
               <div className="card-header d-flex justify-content-between ">
               <h5 className="">Opportunity Information</h5>
               <a href="##" className=" text-decoration-none " data-bs-toggle="modal" data-bs-target="#exampleModalinfo" data-bs-whatever="@mdo"> Edit</a>
               </div>
                <div className="card-body">
                    <h6 className="card-title">Opportunity Name</h6>
                    <p className="card-text"> {Information.name} </p>
                </div>
                <div className="card-body">
                    <h6 className="card-title">Description</h6>
                    <p className="card-text">{Information.description}</p>
                </div>
            </div>
            <InfoModal runtimeUpdate ={runtimeUpdate} />
        </>
    )

}
}
export default Information;

