import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { facebookSignIn } from './LoginManager';

const FacebookLogin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const fbSignIn = () => {
        facebookSignIn()
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
            <button onClick={fbSignIn} style={{ borderRadius: '20px' }} className="btn border">
                <i style={{ color: 'orange' }} className="fa-brands fa-facebook me-4"></i> Continue with Facebook
            </button>
        </div>
    );
};

export default FacebookLogin;