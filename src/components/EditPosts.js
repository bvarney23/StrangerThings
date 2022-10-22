import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditPost = (props) => {
    const [title, setTitle] = useState("")
    console.log("I am edit post props", props)
    const navigate = useNavigate()
    function changeInput (event) {
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    async function formSubmit (event) {
        event.preventDefault()
        try {
            console.log("form event:", event.target.value)
            const response = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${props.theSpecificPost._id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        post: {
                          title: title
                        }
                      })
                })

                navigate("/profile")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={formSubmit}>
            <label>Title</label>
            <input type="text"  value={title} onChange={changeInput}></input>
            <button type="submit">Update</button>
        </form>
        
    )
}

export default EditPost