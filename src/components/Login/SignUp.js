import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';

const SignUp = () => {

    const [disableLogin, setdisableLogin] = useState(true);
    const [password, setPassword] = useState('');

    const handleBlur = (e) => {
        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            if(isFieldValid){
                setPassword(e.target.value);
            }
            else{
                setPassword('');
            }
        }
        if (e.target.name === 'confirm-password') {
            isFieldValid = (e.target.value === password);
        }

        if (isFieldValid) {
            setdisableLogin(false);
        }
        else {
            setdisableLogin(true);
        }
    }

    return (
        <div className="login-page d-flex flex-column justify-content-center align-items-center">
            <form className="border p-5">
                <h4 className="fw-bold mb-4">Create an account</h4>
                <div className="mb-3">
                    <input name="name" type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" required />
                </div>
                <div className="mb-3">
                    <input onBlur={handleBlur} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input onBlur={handleBlur} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div className="mb-3">
                    <input onBlur={handleBlur} name="confirm-password" type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" required />
                </div>
                <button disabled={disableLogin} type="submit" className="btn orange-btn w-100">Create an account</button>
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