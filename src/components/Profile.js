import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Profile = () => {
    const [profile, setProfile] = useState("")
    const [productId, setProductId] = useState("")


    useEffect (() => {

        async function fetchProfileData () {

            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me", 
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                })
                console.log("This is response for profile:", response)
                const data = await response.json();
                console.log("This is the profile data: ", data)
                setProfile(data.data.posts)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProfileData()
    }, [])


        async function deletePost (event) {
            try {
                console.log(event.target.value)
                const response = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${event.target.value}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                })
                console.log("This is the delete request: ", response)
                const data = await response.json()
                console.log ("this is the data from delete post:", data)
                setProductId(data.data)
            } catch (error) {
                console.log(error)
            }
        }

        
    return (
        <div>
            <h2>Welcome to your profile page</h2>
            <div id="post-container">

            {
                profile && profile.length ? profile.map((indivProfile, idx) => {
                    return <div key={idx}>
                        <div id="posts">
                        <p>Title: {indivProfile.title}</p>
                        <p>Item ID: {indivProfile._id}</p>
                        <p>Description: {indivProfile.description}</p>
                        <button value={indivProfile._id} type="submit" onClick={(deletePost)}>Delete</button>
                        {/* <button value={indivProfile._id} type="submit" onClick={(handleEditPost, handleToggleEdit)}>Update</button> */}
                        <Link to={`/posts/${indivProfile._id}`}>See detailed view</Link>
                        </div>
                    </div>
                }) : <div>no data</div>    
            }
            </div>
        </div>

    )

}

export default Profile