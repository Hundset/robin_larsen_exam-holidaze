import React, { useState, useEffect } from "react";
import { BaseUrl, headers } from "../../constants/Constants";
import { useParams } from "react-router-dom";

function Hotelspecifics() {

    const [info, setInfo] = useState({});

    let { id } = useParams();

    console.log("id", id)

    const url = BaseUrl + "establishments/" + id;

    console.log(url)

    useEffect(() => {
        fetch(url, headers)
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
        <div className="hoteldiv__specific--img"><img src={info.image} alt="thumbnail for hotel" width="100%;"></img></div>
        <h4>Description:</h4>
        <p>{info.description}</p>
        </div>
        <ul>
            <li><h5>E-mail:</h5>{info.email}</li>
            <li><h5>Max guests:</h5><span>{info.maxGuests}</span></li>
        </ul>
    </div>
    </>
    );

}

export default Hotelspecifics;