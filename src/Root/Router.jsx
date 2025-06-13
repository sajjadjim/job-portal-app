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
import MyApplications from "../Components/Home/HotJobs/Job/User Applications/MyApplications";
import AddJob from "../Components/Home/AddJob/AddJob";
import MyPostedJob from "../Components/Home/My Posted Jobs/MyPostedJob";
import ViewJobApplicationRequest from "../Components/Home/HotJobs/Job/Job Application/ViewJobApplicationRequest";


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
    loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
    Component:JobDetails
    },
    {
      path:'/jobApply/:id',
      element:<PrivateRoutes><JobApply></JobApply></PrivateRoutes>
    },
    {
      path:'/myApplications',
      element:<PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
    },{
      path:'/addjob',
      element:<PrivateRoutes><AddJob></AddJob></PrivateRoutes>
    },{
      path:'/myPostedJobs',
      element:<PrivateRoutes><MyPostedJob></MyPostedJob></PrivateRoutes>
    },
    {
      path:'applications/:job_id',
      loader: ({params})=> fetch(`http://localhost:3000/applications/job/${params.job_id}`),
      element: <PrivateRoutes><ViewJobApplicationRequest></ViewJobApplicationRequest></PrivateRoutes>
    }
   ]
  },
]);


export default router;