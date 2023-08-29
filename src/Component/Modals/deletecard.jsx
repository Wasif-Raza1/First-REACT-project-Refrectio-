import React from "react";
import { useNavigate } from "react-router";

const DeleteModal = () => {
    const navigate =useNavigate()
    const remove = () => {
        localStorage.removeItem('opportunity_data');
        navigate('/dashboard/opportunities');
    }
    const submit = () => {
    };


    return (
        <>

            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Opportunity</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <p>Once the opportunity is deleted, it cannot be undone. Are you sure ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" onClick={remove} data-bs-dismiss="modal" class="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeleteModal;

