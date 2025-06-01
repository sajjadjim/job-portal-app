import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Components/Home/Home";
import Register from "../Components/Login and Register/Register/Register";
import Login from "../Components/Login and Register/Login/Login";
import JobDetails from "../Components/Home/HotJobs/Job/JobDetails/JobDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";
import JobApply from "../Components/Home/HotJobs/Job/JobApply/JobApply";

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
    },
    {
    path:'/jobs/:id',
    loader: ({params}) => fetch(`https://server-code-job-website.vercel.app/jobs/${params.id}`),
    Component:JobDetails
    },
    {
      path:'/jobApply/:id',
      element:<PrivateRoutes><JobApply></JobApply></PrivateRoutes>
    }
   ]
  },
]);


export default router;