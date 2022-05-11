import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import './Login.css';
import { signInUserWithEmailAndPassword } from './LoginManager';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [disableLogin, setdisableLogin] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: ''
    });

    const handleBlur = (e) => {
        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            setdisableLogin(false);
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        else {
            setdisableLogin(true);
        }
    }

    const handleSubmit = (e) => {
        signInUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                handleResponse(res, true);
            })

        e.preventDefault();
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            navigate(from, { replace: true });
        }
    }

    return (
        <div className="login-page d-flex flex-column justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="border p-5">
                <h4 className="fw-bold mb-4">Login</h4>
                <div className="mb-3">
                    <input onBlur={handleBlur} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input onBlur={handleBlur} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <button disabled={disableLogin} type="submit" className="btn orange-btn w-100">Login</button>
                <p className="mt-4">Don't have an account? <Link style={{ color: 'orange' }} to='/signup'>Create an account</Link></p>
            </form>

            <hr className="my-4 w-25" />

            <GoogleLogin></GoogleLogin>
            <br />
            <FacebookLogin></FacebookLogin>
        </div>
    );
};

export default Login;