import React from "react";
import DeleteHotel from "./DeleteHotel";

function HotelListObj({ id, name }) {
    return (
        <>
            <div className="dashboard--hotel-list--container">
                <li id={id} className="dashboard--hotel-list--item">{name}</li>
                <DeleteHotel id={id}>DELETE</DeleteHotel>
            </div>
        </>
    );
}

export default HotelListObj;