import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BaseUrl, headers } from "../../constants/Constants";
import DropdownObj from "./dropdown/DropdownObj";
import SavedDropdownObj from "./dropdown/SavedDropdownObj";
import ErrorMessage from "../../errormessage/ErrorMessage";

//SCHEMA & FORM

const enquirySchema = yup.object().shape({

    name: yup.string()
        .required('First name is required')
        .min(2, "Name must be at least 2 letters"),
    email: yup.string()
        .required('We will at least need your e-mail')
        .email("Not a valid e-mail"),
    establishmentId: yup.string()
        .required('Please select a hotel')
        .min(1, "Must be greater than 0 characters"),
    checkIn: yup.date()
        .required("Need a check-in date"),
    checkOut: yup.date()
        .required("Need a check-out date"),
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
            "establishmentId": data.establishmentId,
            "checkIn": data.checkIn,
            "checkOut": data.checkOut
        };

        console.log(JSON.stringify(data.name));

        const url = BaseUrl + "enquiries";

        console.log("Thanks for booking with us!")
        setValMessage("Thanks for booking with us!");
        console.log(data)

        const options = { headers, method: "POST", body: JSON.stringify(myEnquiry) };

        await fetch(url, options)
            .then((r) => r.json())

        localStorage.clear();
    }

    //Populating dropdown

    const [dropdown, setDropdown] = useState([]);
    const [dropdownError, setDropdownError] = useState();

    const url = BaseUrl + "establishments";

    const options = { headers }

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setDropdown(json);
                setDropdownError(null);
            })
            .catch((error) => {
                console.log(error);
                setDropdownError(ErrorMessage);
            });
    }, []);

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
                <label>Which hotel do you wish to make a reservation for? *</label>
                {dropdownError && <div>{dropdownError}</div>}
                <select name="establishmentId" ref={register}>
                    <SavedDropdownObj></SavedDropdownObj>
                    {dropdown.map(hotel => {
                        const { id, name } = hotel;
                        return (
                            <DropdownObj key={id} id={id} name={name}></DropdownObj>
                        );
                    })}
                </select>
                <div className="form--enquiry--checkin-checkout">
                    <label htmlFor="email">How long are you staying? *</label>
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