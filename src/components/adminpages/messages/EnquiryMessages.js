import React from "react";
import DeleteEnquiries from "./DeleteEnquiries";

function ContactMessages({ id, name, email, hotelBooking, checkIn, checkOut }) {

    return (
        <div className="message-div" id={id}>
            <ul>
                <li><span className="ubuntu-span__message">From {name}</span></li>
                <li><span className="ubuntu-span__message">Email</span></li>
                <li className="li__link">{email}</li>
                <li><span className="ubuntu-span__message">Hotel:</span>{hotelBooking}</li>
                <li>{hotelBooking}</li>
                <li>Check in date: </li>
                <li>{checkIn}</li>
                <li>Check out date: </li>
                <li>{checkOut}</li>
            </ul>
            <DeleteEnquiries id={id}></DeleteEnquiries>
        </div>
    )
}

export default ContactMessages;