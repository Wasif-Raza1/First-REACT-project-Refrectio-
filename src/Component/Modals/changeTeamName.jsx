import React, { useState } from "react";


const ChangeTeamName = ({ ChangeName }) => {
    const [opportunitymodal, setopportunitymodal] = useState({
        Name: "",
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
            name: opportunitymodal.Name,
            status: "Draft",
        };
        console.log(newCard);
        ChangeName(newCard);
        setopportunitymodal({
            Name: "",
        });
    };

    return (
        <>

            <div className="modal fade" id="exampleModalName" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Opportunity</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Change Team Name</label>
                                    <input type="text" className="form-control" placeholder='Enter oppoetunity Name'
                                        id="recipient-name"
                                        onChange={inputFeild}
                                        name="Name"
                                        value={opportunitymodal.Name}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                           <button type="button" onClick={submit} data-bs-dismiss="modal" className="btn btn-primary">Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChangeTeamName;

