import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { BaseUrl, headers, DELETE } from "../../constants/Constants";

function DeleteHotel(props) {

    function deleteAlert() {
        confirmAlert({
            title: "Are you sure you want to delete?",
            buttons: [
                {
                    label: "Delete",
                    onClick: () => deleteThisHotel(),
                },
                {
                    label: "Don't delete"
                },
            ],
        });
    }

    async function deleteThisHotel() {
        const url = BaseUrl + "establishments/" + props.id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        window.location.reload(false);
    }
    return (
        <button className="delete-button__hotel" onClick={deleteAlert}>DELETE</button>
    );

}

export default DeleteHotel;