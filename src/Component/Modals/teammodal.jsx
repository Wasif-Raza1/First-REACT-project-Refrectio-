import React, { useState } from "react";

const TeamMember = ({onAddTeam}) => {

    const [teamMember, setteamMember] = useState({
        email: "",
        role: "",
    });
    

    
    const inputFeild = (event) => {
        const { value, name } = event.target;
        setteamMember((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    };

    const submit = () => {
        console.log('submit');
        const newTeam = {
            id: Date.now(),
            email:teamMember.email ,
            role: teamMember.role,
            status: "AddteamMember",
        };
        console.log(newTeam);
        onAddTeam(newTeam);
        setteamMember({
            email: "",
            role: "",
        });
       
    };


    return (
        <>

            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Invite Team Member</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label htmlFor="recipient-name" class="col-form-label">Email</label>
                                    <input type="text" class="form-control" placeholder='Enter Email'
                                        id="recipient-name"
                                        onChange={inputFeild}
                                        name="email"
                                        value={teamMember.email}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="message-text" class="col-form-label"> Role</label>
                                    <input type="text" class="form-control" id="message-text" 
                                        placeholder='Select Role'
                                        onChange={inputFeild}
                                        name="role"
                                        value={teamMember.role}
                                    >
                                    </input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={submit} data-bs-dismiss="modal" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeamMember;

