import React, { useState } from "react";


const Modal = ({ onAddCard }) => {
    const [opportunitymodal, setopportunitymodal] = useState({
        heading: "",
        description: "",
    });
    

    
    const inputFeild = (event) => {
        const { value, name } = event.target;
        setopportunitymodal((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    };


    const submit = () => {
        console.log('submit');
        const newCard = {
            id: Date.now(),
            name: opportunitymodal.heading,
            description: opportunitymodal.description,
            status: "Draft",
        };
        console.log(newCard);
        onAddCard(newCard);
        setopportunitymodal({
            heading: "",
            description: "",
        });
    };

    return (
        <>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Opportunity</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Opportunity Name</label>
                                    <input type="text" className="form-control" placeholder='Enter oppoetunity Name'
                                        id="recipient-name"
                                        onChange={inputFeild}
                                        name="heading"
                                        value={opportunitymodal.heading}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label"> Description</label>
                                    <input type="text" className="form-control" id="message-text" 
                                        placeholder='Enter description'
                                        onChange={inputFeild}
                                        name="description"
                                        value={opportunitymodal.description}
                                    >
                                    </input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={submit} data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal;

