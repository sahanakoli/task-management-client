import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/login/Login";
import SignUp from "../shared/SignUp";
import Dashboard from "../layout/Dashboard";
import NewTask from "../pages/Dashboard/NewTask/NewTask";
import PreviousTask from "../pages/Dashboard/PreviousTask/PreviousTask";
import DragAndDrop from "../pages/Dashboard/DragAndDrop/DragAndDrop";
import Home from "../pages/Home/Home/Home";
import Rules from "../pages/Home/Rules/Rules";
import Faq from "../pages/Home/FAQ/FAQ";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Update from "../component/Update/Update";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'rules',
            element:<Rules></Rules>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'faq',
            element:<Faq></Faq>
        },
        {
          path:'update/:id',
          element:<Update></Update>,
          loader: ({params}) => fetch(`https://task-management-server-black-omega.vercel.app/posts/${params.id}`)
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'newTask',
          element:<NewTask></NewTask>
        },
        {
          path:'previousTask',
          element:<PreviousTask></PreviousTask>
        },
        {
          path:'dragAndDrop',
          element:<DragAndDrop></DragAndDrop>
        },
      ]
    },
  ]);

  export default router;