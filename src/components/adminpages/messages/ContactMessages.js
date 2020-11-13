import React from "react";

function ContactMessages({ name, email, message }) {
    return (
        <div className="contactdiv">
            <ul>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Message: {message}</li>
            </ul>
        </div>
    )
}

export default ContactMessages;