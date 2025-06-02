import React, { Suspense } from 'react';
import ApplicationsList from './ApplicationsList';
// import { use } from 'react';
import { AuthContext } from '../../../../../AuthContext/AuthContext';
import UseAuth from '../../../../../Hooks/UseAuth';
import { myApplicationsPromise } from '../../../../../Api Loading Data/ApplicationsUsers';
// import { useActionData } from 'react-router';

const MyApplications = () => {

    const {user} =UseAuth()

    return (
        <div>
            <Suspense fallback={<div className="flex justify-center items-center h-screen"><button className="btn loading">Loading Applications...</button></div>}>
                <ApplicationsList myApplications={myApplicationsPromise(user.email)}></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;