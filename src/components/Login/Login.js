import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import './Login.css';

const Login = () => {
    return (
        <div className="login-page d-flex flex-column justify-content-center align-items-center">
            <form className="border p-5">
                <h4 className="fw-bold mb-4">Login</h4>
                <div className="mb-3">
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn orange-btn w-100">Login</button>
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