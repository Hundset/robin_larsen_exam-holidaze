import React, { useState, useEffect } from "react";
import { BaseUrl, headers } from "../../constants/Constants";
import Search from "./Search";
import HotelObj from "../hotel/HotelObj";
import ErrorMessage from "../../errormessage/ErrorMessage";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export function Home() {
    const [hotels, setHotels] = useState([]);
    const [searchedHotels, setSearchedHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const url = BaseUrl + "establishments";

    const options = { headers }

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setHotels(json);
                setSearchedHotels(json);
                setError(null);
            })
            .catch((error) => {
                console.log(error)
                setError(ErrorMessage);
            })
            .finally(() => setLoading(false));
    }, []);

    const searchHotels = function (e) {
        const searchName = e.target.value.toLowerCase();

        const results = hotels.filter(function (establishment) {
            const lowerCaseHotel = establishment.name.toLowerCase();

            if (lowerCaseHotel.includes(searchName)) {
                return true;
            }
            return false;
        });

        setSearchedHotels(results);
    }

    const renderLoading = () => {
        if (loading) {
            return <Loader type="TailSpin" color="white" height={80} width={80} />
        }
    }

    return (
        <>
            <h2 className="subtitle">Hotels</h2>

            <Search handleSearch={searchHotels} />

            <div className="hotel--list">

                {renderLoading()}

                {error && <div>{error}</div>}

                {searchedHotels.map(hotel => {
                    const { id, name, image, price, email } = hotel;

                    return (
                        <HotelObj key={id} id={id} name={name} image={image} price={price} email={email} />
                    );
                })}
            </div>
        </>
    );

}

export default Home;