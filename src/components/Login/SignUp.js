import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';

const SignUp = () => {
    return (
        <div className="login-page d-flex flex-column justify-content-center align-items-center">
            <form className="border p-5">
                <h4 className="fw-bold mb-4">Create an account</h4>
                <div className="mb-3">
                    <input name="name" type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <input name="confirm-password" type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn orange-btn w-100">Create an account</button>
                <p className="mt-4">Already have an account? <Link style={{ color: 'orange' }} to='/login'>Login</Link></p>
            </form>

            <hr className="my-4 w-25" />

            <GoogleLogin></GoogleLogin>
            <br />
            <FacebookLogin></FacebookLogin>
        </div>
    );
};

export default SignUp;