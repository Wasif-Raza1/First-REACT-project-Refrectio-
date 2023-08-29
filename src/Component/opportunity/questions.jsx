import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const Questions = () => {
    const validationSchema = Yup.object().shape({
        teamname: Yup.string().required('Atleast one question for comprehension is required'),
        teamname1: Yup.string().required('Atleast one question for quality for idea response is required'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    });

    const {
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    return (
        <>
            <div className="px-5">
                <div >
                    <h4>Evaluation of Comprehension</h4>
                    <p>Publish question or prompt that will measure comprehension of the opportunity.</p>
                </div>
                <div className="register-form">
                    <form onSubmit={''}>
                        <div className="form-group">
                            <label>Question 1 (Required)</label>
                            <input
                                placeholder='e.g. What is the best reason for Team to pursue oppertunity '
                                type="text"
                                {...register('teamname')}
                                className={`form-control ${errors.teamname ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.teamname?.message}</div>
                        </div>
                        <label>Question 2</label>
                        <input
                            placeholder='e.g. What is the best reason for Team to Not pursue oppertunity '
                            type="text"
                            className={`form-control ${errors.teamname ? 'is-invalid' : ''}`}
                        />
                    </form>
                </div>

                <div className=" mt-4">
                    <h4>Evaluation of Quality of Idea-Response</h4>
                    <p>Publish questions that will help participants structure their responses.</p>
                </div>
                <div className="register-form">
                    <form>
                        <div className="form-group">
                            <label>Question 1 (Required)</label>
                            <input
                                placeholder='e.g. Describe the StakeHolders involved in the idea you are submitting '
                                type="text"
                                {...register('teamname1')}
                                className={`form-control ${errors.teamname ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.teamname?.message}</div>
                        </div>
                        <label>Question 2</label>
                        <input
                            placeholder='e.g. Describe the Specific Action to take to pursue Oppertunity '
                            type="text"
                            className={`form-control ${errors.teamname ? 'is-invalid' : ''}`}
                        />
                        <label>Question 3</label>
                        <input
                            placeholder='e.g. Describe the Expected Results from action taken to pursue oppertunity '
                            type="text"
                            className={`form-control ${errors.teamname ? 'is-invalid' : ''}`}
                        />
                        <label>Question 4</label>
                        <input
                            placeholder='e.g. Describe the Risks from action taken to pursue oppertunity '
                            type="text"
                            className={`form-control ${errors.teamname ? 'is-invalid' : ''}`}
                        />
                        <label>Question 5</label>
                        <input
                            placeholder='e.g. WHEN can or should team work on pursue oppertunity?What are DEPENDENCIES? '
                            type="text"
                            className={`form-control ${errors.teamname ? 'is-invalid' : ''}`}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
export default Questions;

