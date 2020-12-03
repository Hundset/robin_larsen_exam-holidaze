import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BaseUrl, headers } from "../../constants/Constants";
import { NavLink } from "react-router-dom";
import HotelListObj from "./HotelListObj";
import ErrorMessage from "../../errormessage/ErrorMessage";

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
});

function AdminHotel() {

    const url = BaseUrl + "establishments";

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
        };

        console.log(JSON.stringify(data.name));

        console.log("Successfully submitted")
        setValMessage("Successfully submitted!");
        console.log(data)

        const options = { headers, method: "POST", body: JSON.stringify(myHotel) };

        await fetch(url, options)
            .then((response) => response.json())
            .then((json) => console.log(json))
    }

    const [hotelItem, setHotelItem] = useState([]);
    const [error, setError] = useState();

    const options2 = { headers };

    useEffect(() => {
        fetch(url, options2)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setHotelItem(json)
                setError(null);
            })
            .catch((error) => {
                console.log(error)
                setError(ErrorMessage);
            })
    }, []);

    return (
        <>
            <h2>Admin</h2>
            <div className="dashboard">
                <nav className="dashboard--header">
                    <NavLink to="/adminpage" className="dashboard--header--link header--link__inactive">Messages</NavLink>
                    <NavLink to="/adminhotel" className="dashboard--header--link">Manage Hotels</NavLink>
                </nav>
                <div>
                    <h4>Add Hotel</h4>
                    <form className="form--hotel" onSubmit={handleSubmit(onSubmit)}>
                        <div className="container">
                            <label htmlFor="name">Name</label>
                            <input name="name" placeholder="Hotel name..." ref={register}></input>
                            {errors.firstName && <p>{errors.firstName.message}</p>}
                            <label htmlFor="email">E-mail</label>
                            <input name="email" placeholder="Hotel e-mail..." ref={register}></input>
                            {errors.email && <p>{errors.email.message}</p>}
                            <label htmlFor="image">Image</label>
                            <input name="image" placeholder="Image url..." ref={register}></input>
                            {errors.image && <p>{errors.image.message}</p>}
                            <div className="form--hotel--price-guests">
                                <label htmlFor="price">Price and max guests</label>
                                <input name="price" placeholder="Price..." ref={register}></input>
                                <input name="maxGuests" placeholder="Max guests..." ref={register}></input>
                                {errors.maxGuests && <p>{errors.maxGuests.message}</p>}
                            </div>
                            <label htmlFor="description">Description</label>
                            <input name="description" placeholder="Description of hotel..." ref={register}></input>
                            {errors.description && <p>{errors.description.message}</p>}
                            <button type="submit">Submit</button>
                            <p className="valMessage">{valMessage}</p>
                        </div>
                    </form>
                </div>
                <h4>Delete Hotel</h4>
                <ul className="dashboard--hotel-list">
                    {error && <li>{error}</li>}
                    {hotelItem.map(hotel => {
                        const { id, name } = hotel;

                        return (
                            <HotelListObj key={id} id={id} name={name} />
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default AdminHotel;