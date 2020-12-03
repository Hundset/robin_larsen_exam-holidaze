import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { BaseUrl, headers, DELETE } from "../../constants/Constants";

function DeleteEnquiries(props) {

    function deleteAlert() {
        confirmAlert({
            title: "Are you sure you want to delete?",
            buttons: [
                {
                    label: "Delete",
                    onClick: () => deleteEnquiryMsg(),
                },
                {
                    label: "Don't delete"
                },
            ],
        });
    }

    async function deleteEnquiryMsg() {
        const url = BaseUrl + "enquiries/" + props.id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        window.location.reload(false);
    }
    return (
        <button className="delete-button" onClick={deleteAlert}>DELETE</button>
    );

}

export default DeleteEnquiries;