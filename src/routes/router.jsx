import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />
    },
    {
        path: "/news",
        element: <h2>News</h2>
    },
    {
        path: "/login",
        element: <h2>Login</h2>
    },
    {
        path: "*",
        element: <h2>Error Page</h2>
    }
])


export default router;