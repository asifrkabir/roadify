import React from 'react';
import './Home.css';
import bg from '../../assets/images/bg.png';
import bike from '../../assets/images/bike.png';
import car from '../../assets/images/car.png';
import bus from '../../assets/images/bus.png';
import train from '../../assets/images/train.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const bgStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    }

    const navigate = useNavigate();

    const handleClick = (type) => {
        const url = `/destination/${type}`;
        navigate(url);
    }

    return (
        <div>
            <div className="home d-flex justify-content-center align-items-center" style={bgStyle}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div onClick={() => handleClick('bike')} className="col-md-4 transportation-card">
                        <div className="card border-0">
                            <img src={bike} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">BIKE</h5>
                                </div>
                        </div>
                    </div>
                    <div onClick={() => handleClick('car')} className="col-md-4 transportation-card">
                        <div className="card border-0">
                            <img src={car} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">CAR</h5>
                                </div>
                        </div>
                    </div>
                    <div onClick={() => handleClick('bus')} className="col-md-4 transportation-card">
                        <div className="card border-0">
                            <img src={bus} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">BUS</h5>
                                </div>
                        </div>
                    </div>
                    <div onClick={() => handleClick('train')} className="col-md-4 transportation-card">
                        <div className="card border-0">
                            <img src={train} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">TRAIN</h5>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;