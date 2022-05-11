import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleGoogleSignIn } from './LoginManager';

const GoogleLogin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then((res) => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        if (redirect) {
            navigate(from, { replace: true });
        }
    }

    return (
        <div>
            <button onClick={googleSignIn} style={{ borderRadius: '20px' }} className="btn border">
                <i style={{ color: 'orange' }} className="fa-brands fa-google me-4"></i> Continue with Google
            </button>
        </div>
    );
};

export default GoogleLogin;