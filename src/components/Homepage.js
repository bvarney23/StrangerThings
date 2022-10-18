import React, { useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";

const Homepage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        async function fetchPostsData () {

            try {
                const response = await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts")
                    console.log(response)
                const data = await response.json()
                    console.log(data)   
                setPosts(data.data.posts)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPostsData();
    }, [])

    return (
<div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/posts">All Posts</Link>
            <Link to="/createlogin">Create Login</Link>
        </nav>
        <h1>This is a page</h1>

        <Outlet context={posts}/>
        </div>
    )

};

export default Homepage