import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {

    const location = useLocation()
    // console.log(location)

    const { user , loading } = use(AuthContext)

    if(loading) {
        return <div className='flex justify-center items-center h-screen'>
            <button className="btn loading">loading</button>
        </div>
    }

    if (!user) {
     return   <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoutes;