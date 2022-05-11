import React from 'react';
import car from '../../assets/images/car.png';
import peopleIcon from '../../assets/images/peopleicon.png';
import './TransportDetails.css';

const TransportDetails = () => {
    return (
        <div className="d-flex justify-content-between align-items-center bg-white p-3 details-card my-3">
            <img className="w-25" src={car} alt="" />
            <h5 className="m-0">Car</h5>
            <div className="d-flex justify-content-center align-items-center">
                <img className="w-25" src={peopleIcon} alt="" />
                <h5 className="m-0 ms-2">4</h5>
            </div>
            <h5 className="m-0">$67</h5>
        </div>
    );
};

export default TransportDetails;