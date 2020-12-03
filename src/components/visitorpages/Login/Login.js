import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, Link } from "react-router-dom";

export default function Login() {
    const username = "Admin";
    const password = "Admin";

    const location = useLocation();

    const history = useHistory()

    const { register, handleSubmit } = useForm();

    const onSubmit = () => {
        history.push('/adminpage');
    }

    const render = () => {
        if (location.pathname === "/adminpage" || location.pathname === "/adminhotel") {
            return (
                <>
                    <div>
                        <p>Welcome Admin</p>
                        <Link to="/"><button>Logout</button></Link>
                    </div>
                </>
            );
        } else {
            return (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="userName" placeholder="Username..." ref={register({
                        validate: {
                            userEqual: value => (value === username)
                        }
                    })}></input>
                    <input name="adminPassword" placeholder="Password..." ref={register({
                        validate: {
                            pwdEqual: value => (value === password)
                        }
                    })}></input>
                    <button type="submit">login</button>
                </form>
            );
        }
    }
    return (
        <div className="nav-form--container">
            {render()}
        </div>
    );

}