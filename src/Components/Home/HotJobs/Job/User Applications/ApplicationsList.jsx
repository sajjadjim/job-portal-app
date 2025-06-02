// import { div } from 'motion/react-client';
import React, { use } from 'react';

const ApplicationsList = ({ myApplications }) => {
    const applications = use(myApplications);
    console.log(applications);

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