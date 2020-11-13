import React, { useState, useEffect } from "react";
import { ContactUrl } from "../../constants/Constants";
import ContactMessages from "../messages/ContactMessages";

function Admin() {

    const [contacts, setContacts] = useState([]);

    useEffect (() => {
        fetch(ContactUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setContacts(json);
            })
            .catch((error) => console.log(error));
    }, []);

    return(
    <>
        <h2>Admin</h2>

        <div className="contacts--list">
            {contacts.map(contact => {const {id, name, email, message } = contact;
            
            return (
                <ContactMessages key={id} id={id} name={name} email={email} message={message}/>
                );
            })}

        </div>
    </>
    );
}

export default Admin;