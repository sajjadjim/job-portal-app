import React from 'react';
import { useLoaderData } from 'react-router';
import ApplicationsList from '../User Applications/ApplicationsList';
import AppllicantInfo from './AppllicantInfo';

const ViewJobApplicationRequest = () => {
    const allApplications = useLoaderData();
    console.log(allApplications)
    return (
        <div>
            <div className='grid  grid-cols-3 gap-5 my-10'>
                {
                    allApplications.map((application => (
                        <AppllicantInfo key={application._id} application={application}></AppllicantInfo>
                    )))
                }
            </div>
        </div>
    );
};

export default ViewJobApplicationRequest;


// {
//     "_id": "683daa115f3d06f813dd7da3",
//     "github": "sajjadjim15",
//     "linkedin": "sajjadjim155",
//     "cv": "https://console.firebase.google.com/project/job-portal-d07d2/authentication/users",
//     "email": "sajjadjim@gmail.com",
//     "jobId": "683c691c3563673193a0a962"
// }