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
                const filteredData = data.data.posts.filter(post => {
                    return post.active === true
                })
                setProfile(filteredData)
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
                        <div className="postcontent"><p>Title:<br></br>{indivProfile.title}</p></div>
                        <div className="postcontent"><p>Description:<br></br>{indivProfile.description}</p></div>
                        <button value={indivProfile._id} type="submit" onClick={(deletePost)}>Delete</button>
                        <Link className ="navlink-postscontent" to={`/posts/${indivProfile._id}`}>See detailed view</Link>
                        </div>
                    </div>
                }) : <div>no data</div>    
            }
            </div>
        </div>

    )

}

export default Profile