import React, { useEffect } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs/HotJobs';

const Home = () => {
    useEffect(()=>{
        document.title = 'Find Your Job - Home';
    })
    return (
        <div>
            <Banner></Banner>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;