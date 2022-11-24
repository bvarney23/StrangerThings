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
                        <div className="postcontent"><p>Title:<br></br>{indivPosts.title}</p></div>
                        <div className="postcontent"><p>Description:<br></br> {indivPosts.description}</p></div>
                        <div className="postcontent"><p>Price:<br></br> {indivPosts.price}</p></div>
                        <div className="postcontent"><p>Post Location:<br></br> {indivPosts.location}</p></div>
                        <div className="postcontent"><Link className="navlink-posts" to={`/posts/${indivPosts._id}`}>Get More Info</Link></div>
                    </div>
                </div>
            }) : <div>Server is down</div>
        }
        </div>
    )
}

export default AllPosts