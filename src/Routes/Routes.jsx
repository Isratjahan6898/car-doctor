import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
               path:'/signUp',
               element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;