import React, { useState } from "react";
import { useOutletContext } from "react-router";

const AddPosts = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [deliver, setDeliver] = useState("");

    const [posts, setPosts] = useOutletContext();

    async function postSubmitHandler (event) {
        event.preventDefault();

        try {
        const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    deliver: deliver
                }
            })
        })
        const data = await response.json();
        console.log("This is the data: ", data)

        setPosts([...posts, data.data.post])

        
        } catch (error) {
            console.log(error);
        }
    }
    function updateTitleState(event) {
        setTitle(event.target.value)
    }
    function updateDescriptionState(event) {
        setDescription(event.target.value)
    }
    function updatePriceState(event) {
        setPrice(event.target.value)
    }


    return (
        <div>
            <form onSubmit={postSubmitHandler}>
                <label>Post</label>
                <input type="text" value={title} onChange={updateTitleState}></input>

                <label>Description</label>
                <input type="text" value={description} onChange={updateDescriptionState}></input>

                <label>Price</label>
                <input type="text" value={price} onChange={updatePriceState}></input>

                {/* <label>Deliver</label>
                <input list="text" value={deliver} onChange={updateDeliverState}></input> */}

                <button type="submit">Create New Posts</button>
            </form>
        </div>
    )
}

export default AddPosts