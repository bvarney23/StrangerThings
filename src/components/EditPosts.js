import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditPost = (props) => {
    const [title, setTitle] = useState("")
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
        <form id="editform" onSubmit={formSubmit}>
            <div className="edit-content">
            <label><p>Edit Title Below</p></label>
            <p><input type="text"  value={title} onChange={changeInput}></input></p>
            <p><button type="submit">Update</button></p>
            </div>
        </form>
        
    )
}

export default EditPost