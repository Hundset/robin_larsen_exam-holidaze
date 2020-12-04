import React, { useState, useEffect } from "react";
import { BaseUrl, headers } from "../../constants/Constants";
import ContactMessages from "../messages/ContactMessages";
import EnquiryMessages from "../messages/EnquiryMessages";
import ErrorMessage from "../../errormessage/ErrorMessage";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function AdminMessages() {
    const contactUrl = BaseUrl + "contacts"
    const inquiryUrl = BaseUrl + "enquiries";

    const [contacts, setContacts] = useState([]);
    const [enquiries, setEnquiries] = useState([]);
    const [contactError, setContactError] = useState();
    const [enquiryError, setEnquiryError] = useState();
    const [loading, setLoading] = useState(true);

    const options = { headers };

    useEffect(() => {
        fetch(contactUrl, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setContacts([]);
                } else {
                    setContacts(json);
                }
            })
            .catch((error) => {
                console.log(error);
                setContactError(ErrorMessage);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetch(inquiryUrl, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setEnquiries([]);
                } else {
                    setEnquiries(json);
                }
            })
            .catch((error) => {
                console.log(error)
                setEnquiryError(ErrorMessage);
            })
            .finally(() => setLoading(false));
    }, []);

    const renderLoading = () => {
        if (loading) {
            return (
                <div className="spinner--container">
                    <Loader className="spinner" type="TailSpin" color="#C15036" height={80} width={80} />
                </div>
            );
        }
    }

    return (
        <>
            <div className="dashboard--messages--list">
                <h4>Contact Messages</h4>

                {renderLoading()}

                {contactError && <div>{contactError}</div>}

                {contacts.map(contact => {
                    const { id, name, email, message } = contact;

                    return (
                        <ContactMessages key={id} id={id} name={name} email={email} message={message} />
                    );
                })}
            </div>
            <div className="dashboard--messages--list">
                <h4>Enquiries</h4>

                {renderLoading()}

                {enquiryError && <div>{enquiryError}</div>}

                {enquiries.map(enquiry => {
                    const { id, name, email, establishmentId, checkIn, checkOut } = enquiry;

                    return (
                        <EnquiryMessages key={id} id={id} name={name} email={email} establishmentId={establishmentId} checkIn={checkIn} checkOut={checkOut} />
                    );
                })}
            </div>
        </>
    );
}

export default AdminMessages;