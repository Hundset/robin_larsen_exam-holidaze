import React, { useState, useEffect } from "react";
import { BaseUrl, headers } from "../../constants/Constants";
import ContactMessages from "../messages/ContactMessages";
import EnquiryMessages from "../messages/EnquiryMessages";

function Admin() {

    const contactUrl = BaseUrl + "contacts"

    const inquiryUrl = BaseUrl + "enquiries";

    const [contacts, setContacts] = useState([]);

    const [enquiries, setEnquiries] = useState([]);

    const options = { headers };

    useEffect (() => {
        fetch(contactUrl, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setContacts(json);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect (() => {
        fetch(inquiryUrl, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setEnquiries(json);
            })
            .catch((error) => console.log(error));
    }, []);

    return(
    <>
        <h2>Admin</h2>
    <div className="dashboard">
        <div className="dashboard--messages">
            <div className="dashboard--messages--list">
            <h3>Contact Messages</h3>

                    {contacts.map(contact => {const {id, name, email, message } = contact;
                    
                    return (   
                        <ContactMessages key={id} id={id} name={name} email={email} message={message}/>
                        );
                    })}
            </div>
            <div className="dashboard--messages--list">
            <h3>Enquiries</h3>

                    {enquiries.map(enquiry => {const {id, name, email, establishmentId, checkIn, checkOut } = enquiry;
                    
                    return (   
                        <EnquiryMessages key={id} id={id} name={name} email={email} hotel={establishmentId} checkIn={checkIn} checkOut={checkOut}/>
                        );
                    })}
            </div>  
        </div>    
    </div>
    </>
    );
}

export default Admin;