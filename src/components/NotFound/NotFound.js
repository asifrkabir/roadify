import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div style={{ minHeight: '100vh' }} className="container d-flex align-items-center justify-content-center">
                <div className="row d-flex align-items-center">
                    <div className="col-12 text-dark d-flex flex-column justify-content-center">
                        <h1 className="text-center">Error 404</h1>
                        <p className="text-center">This link is incorrect or currently unavailable.</p>
                        <Link className="d-flex justify-content-center text-decoration-none" to='/'><button className="btn orange-btn">Go Back to Home Page</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;