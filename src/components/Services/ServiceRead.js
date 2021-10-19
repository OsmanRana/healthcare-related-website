import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceRead = () => {
    const [services] = useServices()
    const { serviceId } = useParams();
    
    const serviceIdValue = parseInt(serviceId)
    console.log(serviceIdValue)
    const found = services?.find(service => parseInt(service.id) === serviceIdValue)
    console.log(found)
    return (
        <div className="container my-5">

            {
                <img src={found?.image} alt=""/>
            }
            {
                <h2 className="m-3">{found?.name}</h2>
            }
            {
                <p className="text-lg-start text-sm-center">{found?.description}</p>
            }
            <Link to='/home'><Button>Home</Button></Link>
        </div>
    );
};

export default ServiceRead;