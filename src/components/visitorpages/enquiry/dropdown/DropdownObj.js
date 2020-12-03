import React from "react";

function DropdownObj({ id, name }) {

    return (
        <option value={id}>{name}</option>
    );
}

export default DropdownObj;