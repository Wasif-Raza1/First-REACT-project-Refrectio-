import React from "react";
import { useNavigate, useParams } from "react-router";

const DeleteModal = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const cardData = JSON.parse(localStorage.getItem('opportunity_data'));

    // console.log(cardData);

    // console.log(matchedName);


    const remove = () => {
        const updatedData = cardData.filter(item => item.id !== parseInt(id));
        localStorage.setItem('opportunity_data', JSON.stringify(updatedData));
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
                            <h5 class="modal-title" id="exampleModalLabel">Delete Opportunity</h5>
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

