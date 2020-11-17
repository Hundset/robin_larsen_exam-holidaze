import React from "react";
import { useHistory } from "react-router-dom";
import { BaseUrl, headers, DELETE } from "../../constants/Constants";

function DeleteEnquiries(props) {

    const history = useHistory();

    async function deleteMsg() {
    const url = BaseUrl + "enquiries/" + props.id;
    const options = { headers, method:DELETE};
    await fetch(url, options);
    history.push("/adminpage");
    }
    return (
        <button className="delete-button" onClick={deleteMsg}>DELETE</button>
    );

}

export default DeleteEnquiries;