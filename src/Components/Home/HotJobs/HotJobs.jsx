import React, { useEffect, useState } from 'react';
import Job from './Job/Job';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://server-code-job-website.vercel.app/jobs')
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

    if (loading) {
        return <div>Loading jobs...</div>;
    }

    return (
        <div className='mt-10'>
           <div className='grid grid-cols-3 gap-5'>
             {
                jobs.map(job => (
                    <div
                        key={job.id}
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
