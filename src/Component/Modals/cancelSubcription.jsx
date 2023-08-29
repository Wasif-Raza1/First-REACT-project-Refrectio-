import React from "react";
import { useNavigate } from "react-router";

const CancelSubcription = () => {
    const navigate = useNavigate()
    // const remove = () => {
    //     localStorage.removeItem('opportunity_data');
    //     navigate('/dashboard/opportunities');
    // }
    const submit = () => {
    };


    return (
        <>

            <div class="modal fade" id="exampleModalcancel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cancel Subscription</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>If you cancel your subscription you will not be able to use Refractio for your team and all associated data will be deleted, at the end of the subscription.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Cancel Subcription</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CancelSubcription;

