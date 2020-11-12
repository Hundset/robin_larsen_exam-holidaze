import React, { useState, useEffect } from "react";
import { BaseUrl } from "../../constants/Constants";
import { useParams } from "react-router-dom";

function HotelSpecifics() {

    const [info, setInfo] = useState({});

    let { id } = useParams();

    const url = BaseUrl + "hotels/" + id;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(json => setInfo(json))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
        <h2 className="active">Hotel: {info.name}</h2>
        <div className="hoteldiv__specific">
        <div className="hoteldiv__specific--header"><p>{info.name}</p>
        <p>Price: {info.price}</p></div>
        <div className="hoteldiv--content">
        <div className="hoteldiv__specific--img"><img src={info.imageurl} alt="thumbnail for hotel" width="100%;"></img></div>
        <h4>Description:</h4>
        <p>{info.description}</p>
        </div>
        <ul>
            <li><h5>Address:</h5>{info.address}</li>
            <li><h5>E-mail:</h5>{info.email}</li>
            <li><h5>Phone:</h5>{info.phone}</li>
            <li><h5>Website:</h5><a href={info.website} target="_blank" rel="noopener noreferrer">{info.website}</a></li>
        </ul>
    </div>
    </>
    );

}

export default HotelSpecifics;