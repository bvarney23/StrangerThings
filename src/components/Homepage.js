import React, { useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";

const Homepage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        async function fetchPostsData () {

            try {
                const response = await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts")
                    // console.log("This is the response from API call:", response)
                const {data} = await response.json()
                    console.log("This is all posts data:", data)   
                setPosts(data.posts)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPostsData();
    }, [])


    return (
<div>
    <header>
        <nav>
            <Link className="head" to="/">Home</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <Link className="navlink" to="/posts">All Posts</Link>&nbsp;
            <Link className="navlink" to="/createlogin">Create Login</Link>&nbsp;
            <Link className="navlink" to="/login">Login</Link>&nbsp;
            <Link className="navlink" to="/addposts">Add Posts</Link>&nbsp;
            <Link className="navlink" to="/profile">Profile</Link>
        </nav>
    </header>
        <h1>Welcome to sell zone</h1>
        

        <Outlet className="post-info" context={posts}/>
        </div>

    )

};

export default Homepage