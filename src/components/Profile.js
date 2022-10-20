import React, { useEffect, useState } from "react";


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
                // const productIdData = await response.json();
                    console.log("This is the profile data:", data)
                setProfile(data.data.posts)
                // setProductId(productIdData.data._id)
                    // console.log("This is the product id", productId)    
            } catch (error) {
                console.log(error)
            }
        }
        fetchProfileData()

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
        } catch (error) {
            console.log(error)
        }
    } deletePost()       
    }, [])


    return (
        <div>
            <h2>Welcome to your profile page</h2>
            {
                profile && profile.length ? profile.map((indivProfile, idx) => {
                    return <div key={idx}>
                        <p>Title: {indivProfile.title}</p>
                        <p>Item ID: {indivProfile._id}</p>
                        <p>Active: {indivProfile.active}</p>
                        <p>Description: {indivProfile.description}</p>
                        <button type="submit">Delete</button>
                    </div>
                }) : <div>no data</div>    
            }
        </div>

    )

}

export default Profile