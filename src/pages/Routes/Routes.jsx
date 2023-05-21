import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../Home/Home/Home";
import AllToys from "../AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
import AddToy from "../AddToy/AddToy";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import EachDetails from "../details/EachDetails";
import Update from "../MyToys/Update";
import Error from "../error/Error";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Blog";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
          {
              path:'/',
              element:<Home></Home>
  
          },
          {
              path:'alltoys',
              element:<AllToys></AllToys>
          },
          {
            path:'mytoys',
            element:<MyToys></MyToys>   
             },
        {
            path:'addToys',
            element:<AddToy></AddToy>
        },
          {
              path:'signup',
              element:<SignUp></SignUp>
          },
          {
            path:'login',
            element:<Login></Login>
        },
        {
          path:'blog',
          element:<Blog></Blog>
      },
        {
          path:'alltoys/:id',
         element:<PrivateRoute><EachDetails></EachDetails></PrivateRoute>,
         loader: ({params}) => fetch(`https://curd-assignment-serer-side.vercel.app/toys/${params.id}`)
       },

       {
        path:'update/:id',
       element:<Update></Update>,
       loader: ({params}) => fetch(`https://curd-assignment-serer-side.vercel.app/toys/${params.id}`)
     }
    
    ]
 },

{

  
    path:'*',
    element: <Error></Error>
   
}



  ]);
export default router;