import React from "react";
import DeleteContact from "./DeleteContact";

function ContactMessages({ id, name, email, message }) {

    return (
        <div className="message-div" id={id}>
            <ul>
                <li><span className="ubuntu-span__message">From {name}</span></li>
                <li><span className="ubuntu-span__message">Email</span></li>
                <li className="li__link">{email}</li>
                <li><span className="ubuntu-span__message">Message:</span></li>
                <li className="message-box">{message}</li>
            </ul>
            <DeleteContact id={id}></DeleteContact>
        </div>
    )
}

export default ContactMessages;