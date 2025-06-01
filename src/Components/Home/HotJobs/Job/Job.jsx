import React from 'react';
import { Link } from 'react-router';

const Job = ({ job }) => {

    const { title, jobType, description, category, requirements, status, company_logo  , _id} = job
    // console.log(job)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={company_logo}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{jobType}</div>
                </h2>
                <div className="badge badge-secondary">{category}</div>
                <p>{description}</p>
                <div className="badge badge-primary">{status}</div>
                <div className="card-actions justify-end">
                    {
                        requirements.map((req, id) => (
                            <div key={id} className="badge badge-outline">{req}</div>
                        ))
                    }
                </div>

            </div>
            <div className='flex justify-end m-1'> 
                <Link to={`/jobs/${_id}`}><button className='btn w-auto btn-primary'>More Details</button></Link>
            </div>
        </div>
    );
};

export default Job;



// {
//     "_id": "683c691c3563673193a0a967",
//     "title": "Data Scientist",
//     "location": "Mohakhali, Dhaka",
//     "jobType": "Full-Time",
//     "category": "Data Science",
//     "applicationDeadline": "2024-12-28",
//     "salaryRange": {
//         "min": 80000,
//         "max": 120000,
//         "currency": "bdt"
//     },
//     "description": "Analyze large datasets to extract meaningful insights and develop predictive models.",
//     "company": "DataWorx Ltd",
//     "requirements": [
//         "Python",
//         "TensorFlow",
//         "SQL",
//         "Tableau"
//     ],
//     "responsibilities": [
//         "Develop predictive models",
//         "Clean and analyze data",
//         "Present data-driven insights"
//     ],
//     "status": "active",
//     "hr_email": "data.hr@dataworx.com",
//     "hr_name": "Rifat Karim",
//     "company_logo": "https://i.ibb.co/pvG4Ph9/icons8-amazon-logo-96.png"
// }