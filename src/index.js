import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./components/Errorpage";
import Homepage from "./components/Homepage";
import AllPosts from "./components/AllPosts";
import DetailedPostView from "./components/DetailedPosts";
import CreateLogin from "./components/CreateLogin";
import Login from "./components/Login";
import AddPosts from "./components/AddPosts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <Errorpage />,
        children: [
            {
                path: "/posts",
                element: <AllPosts />
            },
            {
                path: "/posts/:data",
                element: <DetailedPostView />
            },
            {
                path: "/createlogin",
                element: <CreateLogin />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/addposts",
                element: <AddPosts />
            }
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"))