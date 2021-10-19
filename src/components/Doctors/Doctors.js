import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDoctors from '../../hooks/useDoctors';
import DoctorProfile from './DoctorProfile';


const Doctors = (props) => {
    const [doctors] = useDoctors()
    return (
        <div className="container my-5">
            <h1 className="my-3 text-primary">Our Specialist Doctors</h1>
            <div className="container border-bottom border-danger w-50"></div>
            {
                doctors?.map(doctor => <DoctorProfile
                    key={doctor.id}
                    doctor={doctor}
                />)
            }

            <Link to='/home'><Button>Home</Button></Link>
        </div>
    );
};

export default Doctors;