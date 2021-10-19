import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Service from './Service';



const ServicesDetails = () => {
    const [services] = useServices()
    return (
        <div className="container my-5">
            <h1 className="my-3 text-primary">Our Specialist services</h1>
            <div className="container border-bottom border-danger w-50"></div>
            {
                services?.map(service => <Service
                    key={service.id}
                    service={service}
                />)
            }

            <Link to='/home'><Button>Home</Button></Link>
        </div>
    );
};

export default ServicesDetails;