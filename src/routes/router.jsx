import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import NewsDetails from "../components/NewsDetails";
import NewsLayout from "../layouts/NewsLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/01" />
            },
            {
                path: "/category/:id",
                element: <CategoryNews />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <NewsLayout />,
        children: [
            {
                path: "/news/:id",
                element: <NewsDetails />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
            }
        ]
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