import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/error/Error";
import Login from "../pages/Log/Login";
import SingUp from "../pages/Log/SignUp";
import AddTask from "../pages/addTask/AddTask";
import BrowserTasks from "../pages/browseTasks/BrowserTasks";
import MyPostedTasks from "../pages/myPostedTasks/MyPostedTasks";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'signup',
                Component: SingUp
            },
            {
                path: 'add_task',
                element: <PrivateRoutes><AddTask></AddTask></PrivateRoutes>
            },
            {
                path: 'browse_tasks',
                element: <BrowserTasks></BrowserTasks>
            },
            {
                path: 'my_posted_tasks',
                element: <PrivateRoutes><MyPostedTasks></MyPostedTasks></PrivateRoutes>
            }
        ]
    },
    {
        path: '*',
        Component: Error
    }
])