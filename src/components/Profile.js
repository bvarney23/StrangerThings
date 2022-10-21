import React, { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

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
                setProfile(data.data.posts)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProfileData()
    }, [])

    useEffect (() => {
        async function deletePost () {
            try {
                const response = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/635067147b519d0017001a84`, {
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
        } deletePost()       
    }, [])


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
                        <button type="submit">Delete</button>
                        <Link to={`/profile/${indivProfile._id}`}>See detailed view</Link>
                        </div>
                    </div>
                }) : <div>no data</div>    
            }
            </div>
        </div>

    )

}

export default Profile