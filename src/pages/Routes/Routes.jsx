import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../Home/Home/Home";
import AllToys from "../AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
import AddToy from "../AddToy/AddToy";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";




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
        }
        ]



        
      },
  ]);
export default router;