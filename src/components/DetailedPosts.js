import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import EditPost from "./EditPosts";

const DetailedPostView = () => {
    const [theSpecificPost, setTheSpecifcPost] = useState ({})
    const postData = useOutletContext();
    const [toggleEditForm, setToggleEditForm] = useState(false)

    function handleToggleEdit () {
        setToggleEditForm(!toggleEditForm)
    }

    
    useEffect (() => {
        console.log(postData)
        const [singlePost] = postData.filter((post) => post._id === id)
        setTheSpecifcPost (singlePost)
    }, [])

    const { id } = useParams();



    return (
        <div id="editposts">
            
            {
                theSpecificPost.title ? <p>{theSpecificPost.title}</p> 
                :
                <p>No post information</p>
            }
            {   theSpecificPost.description  ? <p>{theSpecificPost.description}</p> 
                :
                <p>No post information</p>}

            <button onClick={handleToggleEdit}>Edit Post</button>
            {
                toggleEditForm ? <EditPost theSpecificPost={theSpecificPost}/> : null
            }
        </div>
    )
};

export default DetailedPostView