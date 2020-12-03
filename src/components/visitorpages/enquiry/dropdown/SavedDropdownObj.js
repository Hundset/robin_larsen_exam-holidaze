import React from "react";

function SavedDropdownObj() {
    var savedId = localStorage.getItem("hotelId")
    var savedName = localStorage.getItem("hotelName")

    const returnSaved = () => {
        if (localStorage.length > 0) {
            return (
                <option value={JSON.parse(savedId)}>Saved: {JSON.parse(savedName)}</option>
            );
        }
    }
    return (
        <>
            {returnSaved()}
        </>
    );
}

export default SavedDropdownObj;
