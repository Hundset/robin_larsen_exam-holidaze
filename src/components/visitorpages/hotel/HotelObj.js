import React from "react";
import { Link } from "react-router-dom";

function HotelObj({ id, name, imageurl, price, address }) {
    return (
        <div className="hoteldiv">
            <div className="hoteldiv--header"><p>{name}</p>
            <p>Price: {price}</p></div>
            <div className="hoteldiv--content">
            <div className="hoteldiv--content--img"><img src={imageurl} alt="thumbnail for hotel" width="100%;"></img></div>
            <p><span className="ubuntu-span">Address:</span> <span className="address-span">{address}</span></p>
            </div>
            <Link to={"hotels/" + id}>
                <button>View Hotel</button>
            </Link>
        </div>
    )
}

export default HotelObj;