import React, { useState } from "react";
import ReactDom from "react-dom";

const CreateLogin = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmitHandler (event) {
        event.preventDefault();

        try {
           const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
           {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
           })
           const data = await response.json();
           
           localStorage.setItem("token", data.data.token)
        } catch (error) {
            console.log(error)
        }
    }

    function updateUserNameState(event) {
        setUserName(event.target.value)
    }

    function updatePasswordState(event) {
        setPassword(event.target.value)
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <label>Enter New Username</label>
                <input type="text" value={username} onChange={updateUserNameState}></input>

                <label>Enter New Password</label>
                <input type="text" value={password} onChange={updatePasswordState}></input>

                <button type="submit">Sign Up</button>

            </form>
        </div>
    )
}

export default CreateLogin