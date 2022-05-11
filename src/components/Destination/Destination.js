import React, { useEffect, useState } from 'react';
import './Destination.css';
import map from '../../assets/images/map.png';
import TransportDetails from '../TransportDetails/TransportDetails';
import { useParams } from 'react-router-dom';
import { transportationData } from '../../transportationData';

const Destination = () => {

    const { type } = useParams();

    const [transportList, setTransportList] = useState([]);
    const [searched, setSearched] = useState(false);
    const [destination, setDestination] = useState({
        from: 'Mirpur',
        to: 'Dhanmondi'
    });

    useEffect(() => {
        setTransportList(transportationData.filter(t => t.name.toLowerCase() === type));
    }, [type])

    const handleClick = () => {
        setSearched(true);
    }

    const handleBlur = (e) => {
        const newDestination = { ...destination };
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination);
    }

    return (
        <div className="destination-page d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center w-100">
                <div className="col-md-3">

                    {
                        !searched ?
                            <form className="border-0 p-5">
                                <label htmlFor="from" className="form-label">Pick From</label>
                                <div className="mb-3">
                                    <input onBlur={handleBlur} name="from" type="text" className="form-control" id="from" aria-describedby="from" placeholder="From" defaultValue="Mirpur" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="to" className="form-label">Drop At</label>
                                    <input onBlur={handleBlur} name="to" type="text" className="form-control" id="to" aria-describedby="to" placeholder="To" defaultValue="Dhanmondi" />
                                </div>
                                <button onClick={() => handleClick()} type="submit" className="btn orange-btn w-100">Search</button>
                            </form>
                            :
                            <form className="border-0 p-5">
                                <div className="orange-btn">
                                    <ul className="p-4 ms-2">
                                        <li className="mb-4"><h4>{destination.from}</h4></li>
                                        <li><h4>{destination.to}</h4></li>
                                    </ul>
                                </div>
                                <div>
                                    {
                                        transportList?.map((transport) => <TransportDetails transport={transport} key={transport.id}></TransportDetails>)
                                    }
                                </div>
                            </form>
                    }
                </div>
                <div className="col-md-8">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;