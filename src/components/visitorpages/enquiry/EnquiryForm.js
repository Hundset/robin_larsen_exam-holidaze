import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BaseUrl, headers } from "../../constants/Constants";

const enquirySchema = yup.object().shape({

    name: yup.string()
    .required('First name is required')
    .min(2, "Name must be at least 2 letters"),
    email: yup.string()
    .required('We will at least need your e-mail')
    .email("Not a valid e-mail"),
    hotelBooking: yup.string()
    .required("Hotel required"),
    checkIn: yup.string()
    .required("Need a check-in date")
    .min(10, "Must be more than 10 characters"),
    checkOut: yup.string()
    .required("Need a check-out date")
    .min(10, "Must be at least 10 characters"),
});

function EnquiryForm() {

    const { register, handleSubmit, errors } = useForm({
        validationSchema: enquirySchema
    });

    const [valMessage, setValMessage] = useState('')

    async function onSubmit(data) {
        console.log("Thanks for sending us your enquiry!")
        setValMessage("Thanks for sending us your enquiry!");

            const myEnquiry = {
                "name": data.name,
                "email": data.email,
                "establishmentId": data.hotelBooking,
                "checkIn" : data.checkIn,
                "checkOut" : data.checkOut
            };
    
            console.log(JSON.stringify(data.name));
    
            const url = BaseUrl + "enquiries";
    
            console.log("Thanks for booking with us!")
            setValMessage("Thanks for booking with us!");
            console.log(data)
    
            const options = { headers, method: "POST", body: JSON.stringify(myEnquiry) };
    
            await fetch(url, options) 
                .then((r) => r.json())
                .then((j) => console.log(j))
    }

    return (
        <form className="form--enquiry" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
            <div></div>
                <label htmlFor="name">What's your name? *</label>
                    <input name="name" placeholder="Name..." ref={register}></input>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
            <div>
                <label htmlFor="email">How can we get in touch? *</label>
                    <input name="email" placeholder="E-mail..." ref={register}></input>
                    {errors.email && <p>{errors.email.message}</p>}
            </div>
            <label htmlFor="message">Which hotel you booking for? *</label>
            <input name="hotelBooking" placeholder="Hotel..." ref={register}></input>
            {errors.hotelBooking && <p>{errors.hotelBooking.message}</p>}
            <div className="form--enquiry--checkin-checkout">
                <label htmlFor="email">How long you staying? *</label>
                    <input name="checkIn" placeholder="Check in date..." ref={register}></input>
                    <input name="checkOut" placeholder="Check out date..." ref={register}></input>
                    {errors.checkin && <p>{errors.checkin.message}</p>}
                    {errors.checkout && <p>{errors.checkout.message}</p>}
            </div>
        </div>
        <div className="form--buttonbox">
                <button type="submit">Submit</button>
                <p className="valMessage">{valMessage}</p>
            </div>
        </form>
    );

}

export default EnquiryForm;