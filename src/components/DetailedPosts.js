import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const DetailedPostView = () => {
    const postData = useOutletContext();

    const { data } = useParams();

    const theSpecificPost = postData[data];
    return (
        <div>
            {
                theSpecificPost.title && theSpecificPost.title.length ? <p>{theSpecificPost.title}</p>
                :
                <p>No post information</p>
            }
        </div>
    )
};

export default DetailedPostView