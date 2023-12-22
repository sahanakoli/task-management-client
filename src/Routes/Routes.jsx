import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Rules from "../pages/Rules/Rules";
import Login from "../pages/login/Login";
import SignUp from "../shared/SignUp";
import Dashboard from "../layout/Dashboard";
import NewTask from "../pages/Dashboard/NewTask/NewTask";
import PreviousTask from "../pages/Dashboard/PreviousTask/PreviousTask";
import DragAndDrop from "../pages/Dashboard/DragAndDrop/DragAndDrop";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
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
        }
      ]
    },
  ]);

  export default router;