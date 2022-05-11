import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children}) => {

    const [loggedInUser] = useContext(UserContext);
    const location = useLocation();

    if(!loggedInUser.email){
        return <Navigate to="/login" state ={{from: location}} replace></Navigate>
    }
    
    return children;
};

export default PrivateRoute;