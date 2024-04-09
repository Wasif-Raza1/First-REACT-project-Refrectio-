import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';


const ChangeTeam = () => {
    const Navigate = useNavigate();
    const complete = () => {
        Navigate('/subscription1');
    }
    const validationSchema = Yup.object().shape({
        teamname: Yup.string().required('Team Name is required'),
        cardname: Yup.string()
            .required('Card Name is required'),
        cardnum: Yup.string()
            .required('Card Number is required')
            .max(12, '12 Numbers must exceed '),
        date: Yup.string()
            .required('Expiry Date is required'),
        cvc: Yup.string()
            .required('CVC is required'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
        complete();
    };

    return (
        <>
            <div className="modal fade " id="exampleModalchange" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Change Card</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"> <div className="register-form">
                            <form>
                                <div className="form-group">
                                    <label>Team Name</label>
                                    <input
                                        placeholder='Enter Team Name '
                                        type="text"
                                        {...register('teamname')}
                                        className={`form-control ${errors.teamname ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.teamname?.message}</div>
                                </div>

                                <div className="form-group">
                                    <label>Name on Card</label>
                                    <input
                                        name="cardname"
                                        type="text"
                                        placeholder='Enter Card Name'
                                        {...register('cardname')}
                                        className={`form-control ${errors.cardname ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.cardname?.message}</div>
                                </div>

                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input
                                        name="cardnum"
                                        placeholder='0000 0000 0000'
                                        type="text"
                                        {...register('cardnum')}
                                        className={`form-control ${errors.cardnum ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.cardnum?.message}</div>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    <div className="form-group ">
                                        <label>Expiry Date</label>
                                        <input
                                            name="expiry"
                                            type="text"
                                            placeholder='00/00'
                                            {...register('date')}
                                            className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">{errors.date?.message}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>CVC</label>
                                        <input
                                            name="cvc"
                                            type="number"
                                            placeholder='000'
                                            {...register('cvc')}
                                            className={`form-control ${errors.cvc ? 'is-invalid' : ''}`}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.cvc?.message}
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <button className="form-button" >PAY</button>
                                </div>
                            </form>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChangeTeam;

