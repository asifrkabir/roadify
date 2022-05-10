import React from 'react';
import './Destination.css';
import map from '../../assets/images/map.png';

const Destination = () => {
    return (
        <div className="destination-page d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center w-100">
                <div className="col-md-3">
                    <form className="border-0 p-5">
                        <label htmlFor="from" className="form-label">Pick From</label>
                        <div className="mb-3">
                            <input name="from" type="text" className="form-control" id="from" aria-describedby="from" placeholder="From" />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="to" className="form-label">Drop At</label>
                            <input name="to" type="text" className="form-control" id="to" aria-describedby="to" placeholder="To" />
                        </div>
                        <button type="submit" className="btn orange-btn w-100">Search</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;