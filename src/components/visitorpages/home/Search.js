import React from "react";

export default function Search( { handleSearch }) {
    return (
        <input placeholder="Find hotels..." className="searchbar" name="search" onChange={event => handleSearch(event)}></input>
    );
}