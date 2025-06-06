import React, { useEffect, useState } from 'react';
import Job from './Job/Job';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    // Define a state for loading data 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching jobs:", error);
                setLoading(false);
            });
    }, []);

    // Data Loading Button ADD 
    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            {/* loading button add here  */}
            <button className="btn loading">loading</button>
        </div>
    }

    return (
        <div className='mt-10'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                {
                    jobs.map(job => (
                        <div
                            key={job._id}
                            className="transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                        >
                            <Job job={job} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HotJobs;
