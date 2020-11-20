import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BaseUrl, headers } from "../../constants/Constants";
import { NavLink } from "react-router-dom";

const hotelSchema = yup.object().shape({

    name: yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 letters"),
    email: yup.string()
    .required('E-mail is required')
    .email("Not a valid e-mail"),
    image: yup.string()
    .required("Image is required"),
    price: yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be greater than zero")
    .min(2, "Must be at least 2 digits"),
    maxGuests: yup.number()
    .typeError("price must be a number")
    .required("price is required")
    .positive("Price must be greater than zero"),
    description: yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
    /*address: yup.string()
    .required("Address is required"),*/
    
});

function AdminHotel() {

    const { register, handleSubmit, errors } = useForm({
        validationSchema: hotelSchema
    });

    const [valMessage, setValMessage] = useState('')

    async function onSubmit(data) {

            const myHotel = {
                "name": data.name,
                "email": data.email,
                "image": data.image,
                "price": data.price,
                "maxGuests": data.maxGuests,
                "description": data.description,
                //"address": data.address
            };
    
            console.log(JSON.stringify(data.name));
    
            const url = BaseUrl + "establishments";
    
            console.log("Successfully submitted")
            setValMessage("Successfully submitted!");
            console.log(data)
    
            const options = { headers, method: "POST", body: JSON.stringify(myHotel) };
    
            await fetch(url, options) 
                .then((r) => r.json())
                .then((j) => console.log(j))
    }

    return(
    <>
        <h2>Admin</h2>
        <div className="dashboard">
            <nav className="dashboard--header">
                <NavLink to="/adminpage"  className="dashboard--header--link header--link__inactive">Messages</NavLink>
                <NavLink to="/"  className="dashboard--header--link">Add Hotel</NavLink>
            </nav>
                <div className="dashboard--add-hotel">

                    <form className="form--enquiry" onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <label htmlFor="name">Name</label>
                    <input name="name" placeholder="Name..." ref={register}></input>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                <label htmlFor="email">E-mail</label>
                    <input name="email" placeholder="E-mail..." ref={register}></input>
                    {errors.email && <p>{errors.email.message}</p>}
                <label htmlFor="image">Image</label>
                    <input name="image" placeholder="Image..." ref={register}></input>
                    {errors.image && <p>{errors.image.message}</p>}
                <div className="form--enquiry--checkin-checkout">
                    <label htmlFor="price">Price and max guests</label>
                        <input name="price" placeholder="Price..." ref={register}></input>
                        <input name="maxGuests" placeholder="Max guests..." ref={register}></input>
                        {errors.maxGuests && <p>{errors.maxGuests.message}</p>}
                </div>
                <label htmlFor="description">Description</label>
                    <input name="description" placeholder="Description..." ref={register}></input>
                    {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div className="form--buttonbox">
                    <button type="submit">Submit</button>
                    <p className="valMessage">{valMessage}</p>
                </div>
            </form>
        </div>    
    </div>
    </>
    );
}

export default AdminHotel;