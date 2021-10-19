import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useDoctors from '../../hooks/useDoctors';

const Experience = () => {
    const [doctors] = useDoctors()
    const { doctorId } = useParams();

    const doctorIdValue = parseInt(doctorId)
    const found = doctors?.find(doctor => doctor.id === doctorIdValue)
    console.log(found)
    return (
        <div className="container my-5">

            {
                <img src={found?.image} alt=""/>
            }
            {
                <h2 className="m-3">{found?.Name}</h2>
            }
            {
                <h5>Speciality: {found?.specialty}</h5>
            }
            {
                <p className="text-lg-start text-sm-center">{found?.experience}</p>
            }
            <Link to='/home'><Button>Home</Button></Link>
        </div>
    );
};

export default Experience;