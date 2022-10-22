import React from "react";
import { useOutletContext, Link } from "react-router-dom";

const AllPosts = () => {
    const post = useOutletContext();

    return (
        <div id="post-container">
        {
            post && post.length ? post.map((indivPosts, idx) => {
                return <div key={idx}>
                    <div id="posts">
                    <p>Title: {indivPosts.title}</p>
                    <p>Description: {indivPosts.description}</p>
                    <p>Price: {indivPosts.price}</p>
                    <p>Post Location: {indivPosts.location}</p>
                    <Link className="navlink-posts" to={`/posts/${indivPosts._id}`}>Get More Info about {indivPosts.title}</Link>
                    </div>
                </div>
            }) : <div>Server is down</div>
        }
        </div>
    )
}

export default AllPosts