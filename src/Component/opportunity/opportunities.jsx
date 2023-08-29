
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../modal";

const Opportunity = () => {
    const [opportunity, setopportunity] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('opportunity_data'));
        if (items) {
            setopportunity(items);
        }
    }, []);

    const handleAddCard = (newCard) => {
        setopportunity((preOpportunity) => [...preOpportunity, newCard]);
        console.log(newCard, opportunity);
        localStorage.setItem('opportunity_data', JSON.stringify([...opportunity, newCard]));
    };

    const navigate = useNavigate()
    const draft = () => {
        navigate('/dashboard/draft')
    }

    return (
        <>
            <div>
                <div className=" px-3">
                    <div className="d-flex justify-content-between mt-4 mb-4">
                        <h5 className=" ">
                            Oppertunities
                        </h5>
                        <button className=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"> Create New </button>

                    </div>

                </div>
                <div>
                    <div className=" secondary-menu">
                        <a href="###" className="  text-decoration-none "> All</a>
                        <a href="###" className=" text-decoration-none "> Complete</a>
                    </div>
                    <hr className="mx-3 hor-line" />
                    <div className="container">
                        <div className=" row">
                            {opportunity.map((card) => (
                                <div key={card.id} className="card pt-3 px-2 col-lg-3 mx-4">
                                    <div className="card-body">
                                        <Link to="../draft" className="test_name">
                                            {card.name}
                                        </Link>
                                        <br />
                                        <button className="btn btn-dark mt-2 mb-2" onClick={draft}>
                                            Draft
                                        </button>
                                        <p className="card-text mb-5 pb-5">{card.description}</p>
                                        <i className="fa-solid fa-user-group"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Modal onAddCard={handleAddCard} />

            <div className="secondary-item text-center pt-5">
                <h5 className=""> START YOUR FIRST OPPORTUNITY</h5>
                <p className=""> There are no opportunities. Start creating your first Opportunity.</p>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">  Create New </button>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Opportunity</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Opportunity Name</label>
                                    <input type="text" class="form-control" placeholder='Enter oppoetunity Name' id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label"> Description</label>
                                    <textarea class="form-control" id="message-text" placeholder='Enter description'></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Opportunity;

