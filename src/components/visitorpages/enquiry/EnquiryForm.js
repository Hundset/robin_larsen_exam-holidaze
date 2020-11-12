import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const enquirySchema = yup.object().shape({

    firstName: yup.string()
    .required('First name is required')
    .min(2, "Name must be at least 2 letters"),
    lastName: yup.string()
    .required("Last name is required")
    .min(2, "Surname must be at least 2 letters"),
    company: yup.lazy(value => {
        if (
            value &&
            Object.values(value).some(val => !(val === null || val === undefined || val === ""))
        ) {
            return yup.string().min(4, "Company name must be at least 4 letters")
        }
        return yup.mixed().notRequired();
    }),
    email: yup.string()
    .required('We will at least need your e-mail')
    .email("Not a valid e-mail"),
    phone: yup.lazy(value => {
        if (
            value &&
            Object.values(value).some(val => !(val === null || val === undefined || val === ""))
        ) {
            return yup.string().matches(phoneRegExp, "Needs a valid phone number")
        }
        return yup.mixed().notRequired();
    }),
    userMessage: yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    
});

function EnquiryForm() {

    const { register, handleSubmit, errors } = useForm({
        validationSchema: enquirySchema
    });

    const [message, setMessage] = useState('')

    function onSubmit() {
        console.log("Thanks for sending us your enquiry!")
        setMessage("Thanks for sending us your enquiry!");
    }

    return (
        <form className="form--enquiry" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
            <div className="form--enquiry--names">
                <label htmlFor="firstName lastName">What's your name? *</label>
                    <input name="firstName" placeholder="First..." ref={register}></input>
                    <input name="lastName" placeholder="Last..." ref={register}></input>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                    {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            <div className="form--enquiry--company">
                <label htmlFor="company">Contacting us on behalf of a company?</label>
                    <input name="company" placeholder="Company name..." ref={register}></input>
                    {errors.company && <p>{errors.company.message}</p>}
            </div>
            <div className="form--enquiry--email-phone">
                <label htmlFor="email phone">How can we get in touch? *</label>
                    <input name="email" placeholder="E-mail..." ref={register}></input>
                    <input name="phone" placeholder="Phone..." ref={register}></input>
                    {errors.email && <p>{errors.email.message}</p>}
                    {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <label htmlFor="message">What do you wish to be enquire about? *</label>
            <textarea name="userMessage" placeholder="Message..." ref={register}></textarea>
            {errors.userMessage && <p>{errors.userMessage.message}</p>}
        </div>
        <div className="form--buttonbox">
                <button type="submit">Submit</button>
                <p className="valMessage">{message}</p>
            </div>
        </form>
    );

}

export default EnquiryForm;