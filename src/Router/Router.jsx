import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
// import Register from "../Pages/SignUp/SignUp";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import CreateSurvey from "../Pages/Dashboard/Surveyor/CreateSurvey";
import Survey from "../Pages/Survey/Survey";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () =>fetch('http://localhost:5000/survey')
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path: 'survey',
          element:<Survey></Survey>,
          loader: () =>fetch('http://localhost:5000/survey')
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'admin-home',
          element:<AdminHome></AdminHome>
        },
        {
          path: 'manage-users',
          element: <ManageUsers></ManageUsers>
        },
        // surveyor router

        {
          path:'create-survey',
          element: <CreateSurvey></CreateSurvey>
        }
      ]
    }
    
  ]);

  export default router;