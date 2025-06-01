import React from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const UseAuth = () => {
   
   const authInfo = use(AuthContext)

    return authInfo
};

export default UseAuth;