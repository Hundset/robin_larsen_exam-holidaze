import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BaseUrl, headers } from "../../constants/Constants";
import { Link } from "react-router-dom";

const contactSchema = yup.object().shape({

    name: yup.string()
        .required('name is required')
        .min(2, "Name must be at least 2 letters"),
    email: yup.string()
        .required('We will at least need your e-mail')
        .email("Not a valid e-mail"),
    message: yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters")

});

function ContactForm() {

    const { register, handleSubmit, errors } = useForm({
        validationSchema: contactSchema
    });

    const [valMessage, setValMessage] = useState('')

    async function onSubmit(data) {

        const myMessage = {
            "name": data.name,
            "email": data.email,
            "message": data.message,
        }

        console.log(JSON.stringify(data.name));

        const url = BaseUrl + "contacts";

        console.log("Thanks for contacting us!")
        setValMessage("Thanks for contacting us!");
        console.log(data)

        const options = { headers, method: "POST", body: JSON.stringify(myMessage) };

        await fetch(url, options)
            .then((r) => r.json())
            .then((j) => console.log(j))
    }

    return (
        <>
            <div className="contact--pagecontent">
                <form className="form--contact" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">

                        <input name="name" placeholder="Your name..." ref={register}></input>
                        {errors.Name && <p>{errors.Name.message}</p>}

                        <input name="email" placeholder="E-mail..." ref={register}></input>
                        {errors.Email && <p>{errors.Email.message}</p>}

                        <textarea name="message" placeholder="Message..." ref={register}></textarea>
                        {errors.Message && <p>{errors.Message.message}</p>}

                    </div>
                    <div className="form--buttonbox">
                        <button type="submit">Submit</button>
                        <p className="valMessage">{valMessage}</p>
                    </div>
                </form>
            </div>

            <div className="contact--box">
                <div className="contact--box--container">
                    <h4>Want to call us instead?</h4>
                    <h5>Call our customer service:</h5>
                    <p>+47 000 00 000</p>
                    <h5>Opening hours:</h5>
                    <ul>
                        <li>Monday to Friday: 08.00 - 20.00</li>
                        <li>Saturday: Closed</li>
                        <li>Sunday and Holidays: Closed</li>
                    </ul>
                    <h4>Looking to book a hotel?</h4>
                    <p>Check out our Enquiry page if you want to book with us via our website</p>
                    <Link to={"/enquiry"}><button>Enquiry Page</button></Link>
                </div>
            </div>
        </>
    );

}

export default ContactForm;
