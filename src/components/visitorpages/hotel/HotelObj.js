import React from "react";
import { Link } from "react-router-dom";

function HotelObj({ id, name, image, price, email }) {
    return (
        <div className="hoteldiv">
            <div className="hoteldiv--header"><p>{name}</p>
            <p>Price: {price}</p></div>
            <div className="hoteldiv--content">
            <div className="hoteldiv--content--img"><img src={image} alt="thumbnail for hotel" width="100%;"></img></div>
            <p><span className="ubuntu-span">E-mail: </span> <span className="email-span">{email}</span></p>
            </div>
            <Link to={"establishments/" + id}>
                <button>View Hotel</button>
            </Link>
        </div>
    )
}

export default HotelObj;