import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Login() {
    
    const history = useHistory();
    const onSubmit = () => {
        
        history.push('/adminpage');

    }

    const username = "Admin";
    const password = "1991";

    var { register, handleSubmit } = useForm();

    return (
        <form className="nav-form" onSubmit={handleSubmit(onSubmit)}>
            <input name="userName" placeholder="Username..." ref={register({
                validate: {
                    userEqual: value => (value === username)
                }
                })}></input>
            <input name="adminPassword" placeholder="password..." ref={register({
                validate: {
                    pwdEqual: value => (value === password)
                }
                })}></input>
                <button type="submit">login</button>
        </form>
    );
}