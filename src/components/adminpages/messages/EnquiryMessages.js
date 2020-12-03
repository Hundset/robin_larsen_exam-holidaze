import React, { useState, useEffect } from "react";
import { BaseUrl, headers } from "../../constants/Constants";
import DeleteEnquiries from "./DeleteEnquiries";
import { DateTime } from "luxon";
import ErrorMessage from "../../errormessage/ErrorMessage";

function EnquiryMessages({ id, name, email, establishmentId, checkIn, checkOut }) {
    const [hotelName, setHotelName] = useState();
    const [error, setError] = useState();

    const checkinDate = DateTime.fromISO(checkIn)
    const checkinFormatted = checkinDate.toLocaleString(DateTime.DATE_SHORT);

    const checkoutDate = DateTime.fromISO(checkOut)
    const checkoutFormatted = checkoutDate.toLocaleString(DateTime.DATE_SHORT);

    const thisId = establishmentId;

    const url = BaseUrl + "establishments/" + thisId;

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setHotelName(json.name);
                setError(null);
            })
            .catch((error) => {
                console.log(error);
                setError(ErrorMessage);
            })
    })

    return (
        <div className="message-div" id={id}>
            <ul>
                <li><span className="ubuntu-span__message">From {name}</span></li>
                <li><span className="ubuntu-span__message">Email</span></li>
                <li className="li__link">{email}</li>
                <li><span className="ubuntu-span__message">Hotel:</span></li>
                {error && <li>{error}</li>}
                <li>{hotelName}</li>
                <li><span className="ubuntu-span__message">Check in date: </span></li>
                <li>{checkinFormatted}</li>
                <li><span className="ubuntu-span__message">Check out date: </span></li>
                <li>{checkoutFormatted}</li>
            </ul>
            <DeleteEnquiries id={id}></DeleteEnquiries>
        </div>
    )
}

export default EnquiryMessages;