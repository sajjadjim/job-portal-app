import React from 'react';
import { use } from 'react';

const MyJobsList = ({createJobsByMe}) => {

    const jobs = use(createJobsByMe);
    // console.log(jobs)

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                Length All Jobs My {jobs.length}
            </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border-b">Title</th>
                            <th className="px-4 py-2 border-b">Location</th>
                            <th className="px-4 py-2 border-b">Job Type</th>
                            <th className="px-4 py-2 border-b">Category</th>
                            <th className="px-4 py-2 border-b">Application Deadline</th>
                            <th className="px-4 py-2 border-b">Company</th>
                            <th className="px-4 py-2 border-b">Status</th>
                            <th className="px-4 py-2 border-b">Salary Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <tr key={job._id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border-b">{job.title}</td>
                                <td className="px-4 py-2 border-b">{job.location}</td>
                                <td className="px-4 py-2 border-b">{job.jobType}</td>
                                <td className="px-4 py-2 border-b">{job.category}</td>
                                <td className="px-4 py-2 border-b">{job.applicationDeadline}</td>
                                <td className="px-4 py-2 border-b">{job.company}</td>
                                <td className="px-4 py-2 border-b">{job.status}</td>
                                <td className="px-4 py-2 border-b">
                                    {job.salaryRange?.min} - {job.salaryRange?.max} {job.salaryRange?.currency}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobsList;

// {
//     "_id": "683f3474c65e28ef04e97585",
//     "title": "",
//     "location": "Dhaka",
//     "jobType": "",
//     "category": "React",
//     "applicationDeadline": "2025-06-13",
//     "company": "React Google",
//     "company_logo": "",
//     "hr_email": "sajjadjim@gmail.com",
//     "hr_name": "sajjadjim",
//     "status": "active",
//     "description": "",
//     "responsibilities": "",
//     "requirements": [
//         ""
//     ],
//     "salaryRange": {
//         "min": "6777",
//         "max": "78889",
//         "currency": ""
//     }
// }