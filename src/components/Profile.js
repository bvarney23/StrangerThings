import React from "react";


const Profile = () => {

        async function fetchProfileData (event) {
            event.preventDefault();

            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me", 
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                const data = await response.json();
                    console.log("This is the data:", data)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchProfileData



    return (
        <div>
            <h1>Profile Data</h1>
        </div>
    )

}

export default Profile