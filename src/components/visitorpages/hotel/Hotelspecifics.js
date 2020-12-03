import React, { useState, useEffect } from "react";
import { BaseUrl, headers } from "../../constants/Constants";
import { useParams, useHistory } from "react-router-dom";
import ErrorMessage from "../../errormessage/ErrorMessage";

function Hotelspecifics() {
    const [info, setInfo] = useState({});
    const [error, setError] = useState();
    const history = useHistory()

    let { id } = useParams();

    const options = { headers }

    const url = BaseUrl + "establishments/" + id;

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then(json => setInfo(json))
            .catch((error) => {
                console.log(error)
                setError(ErrorMessage);
            });
    }, []);

    function saveHotel() {
        localStorage.setItem("hotelId", JSON.stringify(info.id));
        localStorage.setItem("hotelName", JSON.stringify(info.name));
        history.push("/enquiry")
    }

    return (
        <>
            <h2 className="active">Hotel: {info.name}</h2>
            <div className="hoteldiv__specific">
                <div className="hoteldiv__specific--header"><p>{info.name}</p>
                    <p>Price: {info.price}</p></div>
                <div className="hoteldiv--content">
                    {error && <div>{error}</div>}
                    <div className="hoteldiv__specific--img"><img src={info.image} alt="thumbnail for hotel" width="100%;"></img></div>
                    <h4>Description:</h4>
                    <p>{info.description}</p>
                </div>
                <ul>
                    <li><h5>E-mail:</h5>{info.email}</li>
                    <li><h5>Max guests:</h5><span>{info.maxGuests}</span></li>
                </ul>
                <button onClick={saveHotel}>reserve at {info.name}</button>
            </div>
        </>
    );

}

export default Hotelspecifics;