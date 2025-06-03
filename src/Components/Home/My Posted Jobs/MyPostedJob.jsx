import React, { Suspense }  from 'react';
import { AuthContext } from '../../../AuthContext/AuthContext';
import MyJobsList from './MyJobsList';

import UseAuth from '../../../Hooks/UseAuth';
import { createJobsByMePromise } from '../../../Api Loading Data/JobsApi';

const MyPostedJob = () => {
    const {user} = UseAuth();
    // console.log(user.email)

    return (
        <div>
            <h1>My Posted Jobs Here we can see</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <MyJobsList createJobsByMe={createJobsByMePromise(user.email)}></MyJobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;