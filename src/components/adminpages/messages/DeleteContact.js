import React from "react";
import { useHistory } from "react-router-dom";
import { BaseUrl, headers, DELETE } from "../../constants/Constants";

function DeleteContact(props) {

    const history = useHistory();

    async function deleteContactMsg() {
    const url = BaseUrl + "contacts/" + props.id;
    const options = { headers, method:DELETE};
    await fetch(url, options);
    history.push("/adminpage");
    }
    return (
        <button className="delete-button" onClick={deleteContactMsg}>DELETE</button>
    );

}

export default DeleteContact;