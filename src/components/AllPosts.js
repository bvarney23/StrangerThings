import React from "react";
import { useOutletContext, Link } from "react-router-dom";

const AllPosts = () => {
    const post = useOutletContext();

    return (
        <div>
        {
            post && post.length ? post.map((indivPosts, idx) => {
                return <div key={idx}>
                    <p>Title: {indivPosts.title}</p>
                    <p>Description: {indivPosts.description}</p>
                    <p>Price: {indivPosts.price}</p>
                    <p>Post Location: {indivPosts.location}</p>
                    <Link to={`/posts/${idx}`}>Get More Info about {indivPosts.title}</Link>
                </div>
            }) : <div>Server is down</div>
        }
        </div>
    )
}

export default AllPosts