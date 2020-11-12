import React, { useState } from "react";
import { useForm } from "react-hook-form"; 
import * as yup from "yup";

const contactSchema = yup.object().shape({

    name: yup.string()
    .required('name is required')
    .min(2, "Name must be at least 2 letters"),
    email: yup.string()
    .required('We will at least need your e-mail')
    .email("Not a valid e-mail"),
    userMessage: yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    
});

function ContactForm() {

    const { register, handleSubmit, errors } = useForm({
        validationSchema: contactSchema
    });

    const [message, setMessage] = useState('')

    //const [contactMsg, setContactMsg] = useState('')

    //reactLocalStorage.setObject('var', {'test': 'test'});
    const onSubmit = data => {

        console.log("Thanks for contacting us!")
        setMessage("Thanks for contacting us!");
        console.log(JSON.stringify(data));
    }

    return (
    <>
    <div className="contact--pagecontent">
    <form className="form--contact" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">

            <input name="name" placeholder="Your name..." ref={register}></input>
            {errors.name && <p>{errors.name.message}</p>}

            <input name="email" placeholder="E-mail..." ref={register}></input>
            {errors.email && <p>{errors.email.message}</p>}

            <textarea name="userMessage" placeholder="Message..." ref={register}></textarea>
            {errors.userMessage && <p>{errors.userMessage.message}</p>}

        </div>
        <div className="form--buttonbox">
                <button type="submit">Submit</button>
                <p className="valMessage">{message}</p>
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
                <h4>Want to get more specific?</h4>
                <p>Check out our Enquiry page if you want to leave us a more detailed message</p>
                <button>Go to Enquiry Page</button>
            </div>
        </div> 
    </>
    );

}

export default ContactForm;
