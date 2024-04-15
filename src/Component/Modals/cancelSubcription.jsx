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

            <div className="modal fade" id="exampleModalcancel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cancel Subscription</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>If you cancel your subscription you will not be able to use Refractio for your team and all associated data will be deleted, at the end of the subscription.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-primary">Cancel Subcription</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CancelSubcription;

