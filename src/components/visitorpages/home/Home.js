import React, { useState, useEffect } from "react";
import { BaseUrl } from "../../constants/Constants";
import Search from "./Search";
import HotelObj from "../hotel/HotelObj";

export function Home() {
    const [hotels, setHotels] = useState([]);
    const [searchedHotels, setSearchedHotels] = useState([]);

    const url = BaseUrl + "hotels";

    useEffect (() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setHotels(json);
                setSearchedHotels(json);
            })
            .catch((error) => console.log(error));
    }, []);

    const searchHotels = function(e) {
        const searchName = e.target.value.toLowerCase();

        const results = hotels.filter(function(establishment) {
          const lowerCaseHotel = establishment.name.toLowerCase();
            
          if (lowerCaseHotel.includes(searchName)) {
              return true;
          }
          return false;
        });

        setSearchedHotels(results);
    }

    return (
    <>
            <h2 className="subtitle">Hotels</h2>

            <Search handleSearch={searchHotels}/>

            <div className="hotel--list">
                {searchedHotels.map(hotel => {const { id, name, imageurl, price, address } = hotel;

                return (
                    <HotelObj key={id} id={id} name={name} imageurl={imageurl} price={price} address={address} />
                    );
                })}
            </div>
    </>
    );

}

export default Home;