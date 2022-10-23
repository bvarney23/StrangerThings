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
           setUserName("")
           setPassword("")
           alert("You have created a login")
           const data = await response.json();
           console.log("This is the data: ", data)
           
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
            <form id="formcreatelogin" onSubmit={formSubmitHandler}>
            <div id="form-content">
                <h3>Create Login</h3>
                <label>Enter New Username</label>
                <input type="text" className="form-content" value={username} onChange={updateUserNameState}></input>

                <label>Enter New Password</label>
                <input type="password" className="form-content" value={password} onChange={updatePasswordState}></input>

                <button type="submit">Sign Up</button>
            </div>
            </form>
        </div>
    )
}

export default CreateLogin