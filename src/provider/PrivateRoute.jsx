import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>;
    }
    if (user && user?.email) {
      // check user logged in or not
      return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    
};

export default PrivateRoute;