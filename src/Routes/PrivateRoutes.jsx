import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {


    const { user } = use(AuthContext)

    if (!user) {
        <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoutes;