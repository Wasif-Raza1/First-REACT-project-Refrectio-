import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const InfoModal = ({runtimeUpdate}) => {
    const {id} = useParams();   
    const [info, setinfo] = useState({
        name: "",
        description: "",
    }
    );

    const inputFeild = (event) => {
        const { value, name } = event.target;
        setinfo((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })

    }
    const updateOnSubmit = () => {
        const data = JSON.parse(localStorage.getItem('opportunity_data'));
    
            const findID = data.find((items)=> items.id === parseInt(id) );

       if(info.name){
        findID.name=info.name;
       };
       if (info.description) {
        findID.description=info.description
       }

       localStorage.setItem('opportunity_data', JSON.stringify(data));
       runtimeUpdate(findID);

    }

    // const { id } = useParams();

    // const cardData = JSON.parse(localStorage.getItem('opportunity_data'));

    // const remove = () => {
    //     const updatedData = cardData.replace(item => item.id !== parseInt(id));
    //     // console.log(updatedData);
    //     localStorage.setItem('opportunity_data', JSON.stringify(updatedData));

    // }
    // const submit = () => {
    // };


    return (
        <>

            <div class="modal fade" id="exampleModalinfo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Opportunity</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="form-group">
                                <label>Opportunity Name</label><br />
                                <input className=" w-100"
                                    name="name"
                                    type="text"
                                    placeholder='Enter Card Name'
                                    onChange={inputFeild}
                                    value={info.name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label><br />
                                <textarea className=" w-100"
                                    name="description"
                                    type="text"
                                    placeholder='Enter Card Name'
                                    onChange={inputFeild}
                                    value={info.description}
                                />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={updateOnSubmit}  class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InfoModal;

