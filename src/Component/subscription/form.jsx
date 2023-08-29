import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';

const App = () => {
    const Navigate = useNavigate();
    const complete=()=>{
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
        <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <button className="form-button" type="submit" >PAY</button>
                </div>
            </form>
        </div>
    );
};

export default App;











// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// const Form = () => {

//     const { handleSubmit, register, formState: { errors } } = useForm();
//     const onSubmit = (submitData) => {
//         localStorage.setItem("formData", JSON.stringify(submitData));

//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)} method="post">

//                 <div className="formInput">
//                     <label>Team Name</label> <br />
//                     <input className=" feild_input"
//                         type="text"
//                         name="teamName"
//                         placeholder="Enter Team Name"
//                         {...register("cardname", {
//                             required: "Name on card is required",
//                             pattern: {
//                                 // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                 message: "invalid name on card"
//                             }
//                         })}
//                     />
//                     {errors.teamName && errors.teamName.message}
//                 </div>
//                 <div className="formInput">
//                     <label>Name on Card</label>
//                     <input className="feild_input"
//                         placeholder=" Enter Name on Card"
//                         type="text"
//                         name="cardname"
//                         {...register("cardname", {
//                             required: "Name on card is required",
//                             pattern: {
//                                 // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                 message: "invalid name on card"
//                             }
//                         })}
//                     />
//                     {errors.cardname && errors.cardname.message}
//                 </div>
//                 <div className="formInput">
//                     <label>Card Number</label>
//                     <input className="feild_input"

//                         placeholder=" 0000 0000 0000 0000"
//                         type="number"
//                         name="cardnum"
//                         {...register("cardnum", {
//                             required: "Card num is required",
//                             pattern: {
//                                 // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                 message: "invalid card num"
//                             }
//                         })}
//                     />
//                     {errors.cardnum && errors.cardnum.message}
//                 </div>

//                 <div className="d-flex ">
//                     <div className="formInput">
//                         <label>Expiration Date</label>
//                         <input className="feild_input"
//                             placeholder=" MM/YY"
//                             type="number"
//                             name="expiry"
//                             {...register("expiration", {
//                                 required: "Card expiry required",
//                                 pattern: {
//                                     // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                     message: "invalid expiry date"
//                                 }
//                             })}
//                         />
//                         {errors.expiration && errors.expiration.message}
//                     </div>

//                     <div className="formInput px-3">
//                         <label>CVC</label>
//                         <input className="feild_input"
//                             placeholder=" 3 digit"
//                             type="number"
//                             name="cvc"
//                             {...register("cvc", {
//                                 required: "Card cvc is required",
//                                 pattern: {
//                                     // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                     message: "invalid CVC"
//                                 }
//                             })}
//                         />
//                         {errors.cvc && errors.cvc.message}
//                     </div>
//                 </div>
//                 <button className="form-button" type="submit" >PAY</button>
//             </form>
//         </>
//     )
// }
// export default Form;

