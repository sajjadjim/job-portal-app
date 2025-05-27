import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Components/Home/Home";
import Register from "../Components/Login and Register/Register/Register";
import Login from "../Components/Login and Register/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayouts,
   children:[
     {
        index:true,
        Component:Home
    },
    {
     path:'/register',
     Component:Register   
    },{
        path:'/login',
        Component:Login
    }
   ]
  },
]);


export default router;