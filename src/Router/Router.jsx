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
import OurSurvey from "../Pages/Survey/OurSurvey";
import Pricing from "../Pages/Pricing/Pricing";
import SurveyDetails from "../Components/SurveryDetails/SurveyDetails";
import PaymentHistory from "../Pages/Dashboard/Admin/PaymentHistory";
import SurveyStatus from "../Pages/Dashboard/Admin/SurveyStatus";
import ManageSurvey from "../Pages/Dashboard/Surveyor/ManageSurvey";
import FeedBack from "../Pages/Dashboard/Surveyor/FeedBack";
import AboutUS from "../Pages/AboutUS/AboutUS";
// import SurveyDetails from "../Components/SurveryDetails/SurveyDetails";
// import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            // loader: () =>fetch('https://survey-scribe-server.vercel.app/survey')
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
          path:'/about',
          element:<AboutUS></AboutUS>
        },
        {
          path: 'survey',
          element:<OurSurvey></OurSurvey>,
          loader: () =>fetch('https://survey-scribe-server.vercel.app/survey')
        },
        {
          path:'pricing',
          element: <Pricing></Pricing>,
          loader:()=>fetch('/price.json')
        },
        {
          path: "/details/:id",
          element:<SurveyDetails></SurveyDetails>,
          loader:({params}) =>fetch(`https://survey-scribe-server.vercel.app/survey/${params.id}`)
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
        {
          path:'survey-status',
          element:<SurveyStatus></SurveyStatus>
        },
        {
          path: 'payment-history',
          element: <PaymentHistory></PaymentHistory>
        },
        // surveyor router

        {
          path:'create-survey',
          element: <CreateSurvey></CreateSurvey>
        },
        {
          path:'manage-survey',
          element: <ManageSurvey></ManageSurvey>
        },
        {
          path: 'feedback',
          element: <FeedBack></FeedBack>
        }
        
      ]
    }
    
  ]);

  export default router;