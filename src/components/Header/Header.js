import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="d-flex justify-content-center">
            <nav style={{ backgroundColor: 'transparent', position: 'absolute' }} className="navbar navbar-expand-lg navbar-light w-100 container">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={logo} alt="" /> <span>ROADIFY</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="ms-auto navbar-nav">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/'>Destination</Link>
                        <Link className="nav-link" to='/'>Blog</Link>
                        <Link className="nav-link" to='/'>Contact</Link>
                        <Link className="nav-link login-btn" to='/'>Login</Link>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;