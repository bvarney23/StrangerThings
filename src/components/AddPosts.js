import React, { useState } from "react";

const AddPosts = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [deliver, setDeliver] = useState("");

    async function postSubmitHandler (event) {
        event.preventDefault();

        try {
        const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": ""
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

        //something here to actually post the item?
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
    function updateDeliverState(event) {
        setDeliver(event.target.value)
    }

    return (
        <div>
            <form onSubmit={postSubmitHandler}>
                <label>Post</label>
                <input type="text" value={title} onChange={updateTitleState}></input>

                <label>Description</label>
                <input type="text" value={title} onChange={updateDescriptionState}></input>

                <label>Price</label>
                <input type="text" value={title} onChange={updatePriceState}></input>

                <label>Deliver</label>
                <input list="text" value={title} onChange={updateDeliverState}></input>

                {/* <label>Deliver Item</label>
                <input list="false" onChange={updateDeliverState}>
                    <datalist id="false">
                        <option value="True"></option>
                        <option value="False"></option>
                    </datalist>
                </input> */}

                <button type="submit">Post Item</button>
            </form>
        </div>
    )
}

export default AddPosts