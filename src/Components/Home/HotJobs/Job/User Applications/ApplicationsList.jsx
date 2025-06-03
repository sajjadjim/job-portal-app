// import { div } from 'motion/react-client';
import React, { use } from 'react';
import { Link } from 'react-router';

const ApplicationsList = ({ myApplications }) => {
    const applications = use(myApplications);
    // console.log(applications);
    // const userJobFind = applications.filter(application => application.email ===  
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Company Name</th>
                            <th>Job</th>
                            <th>Location</th>
                            <th>Job Type</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, index) => (
                                <tr key={application._id}>
                                    <th>{index + 1}</th>
                                    <td>{application.job.company}</td>
                                    <td>{application.job.title}</td>
                                    <td>{application.job.location}</td>
                                    <td>{application.job.jobType}</td>
                                    <td><Link to={`/applications/${application.jobId}`} className='btn btn-secondary'>View Applications</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationsList;

// {
//     "_id": "683daa115f3d06f813dd7da3",
//     "github": "sajjadjim15",
//     "linkedin": "sajjadjim155",
//     "cv": "https://console.firebase.google.com/project/job-portal-d07d2/authentication/users",
//     "email": "sajjadjim@gmail.com",
//     "jobId": "683c691c3563673193a0a962",
//     "job": {
//         "_id": "683c691c3563673193a0a962",
//         "title": "Marketing Specialist",
//         "location": "Banani, Dhaka",
//         "jobType": "Remote",
//         "category": "Marketing",
//         "applicationDeadline": "2024-12-15",
//         "salaryRange": {
//             "min": 30000,
//             "max": 50000,
//             "currency": "bdt"
//         },
//         "description": "Join our marketing team to strategize and implement innovative campaigns for our products and services.",
//         "company": "GoatMark Inc",
//         "requirements": [
//             "Google Analytics",
//             "SEO",
//             "Content Management Systems",
//             "Excel"
//         ],
//         "responsibilities": [
//             "Develop marketing strategies",
//             "Manage ad campaigns",
//             "Analyze campaign performance"
//         ],
//         "status": "active",
//         "hr_email": "recruitment@brightmark.com",
//         "hr_name": "Tasnia Ahmed",
//         "company_logo": "https://i.ibb.co/TvvzXfq/google.png"
//     }
// }