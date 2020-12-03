import React from "react";
import AdminMessages from "../adminmessages/AdminMessages";
import { NavLink } from "react-router-dom";

function Admin() {

    return (
        <>
            <h2>Admin</h2>
            <div className="dashboard">
                <nav className="dashboard--header">
                    <NavLink to="/adminpage" className="dashboard--header--link">Messages</NavLink>
                    <NavLink to="/adminhotel" className="dashboard--header--link header--link__inactive">Add Hotel</NavLink>
                </nav>
                <div className="dashboard--messages">
                    <AdminMessages></AdminMessages>
                </div>
            </div>
        </>
    );
}

export default Admin;