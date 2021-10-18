import React, { useEffect, useState } from 'react';
import DoctorsDetails from '../Doctors/DoctorsDetails';


import Banner from './Banner';

const Home = () => {
    const [doctors, setDoctors] =useState([])
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <>
            <Banner></Banner>
            <div className="container my-5">
                <div>
                    <h1 className="fw-lighter text-primary">Life Care Hospital</h1>
                    <h1 className="fw-bolder display-5 text-dark">BEST HOSPITAL IN TOWN</h1>
                    <p className="text-muted">When It Comes to Health Care</p>
                    <hr />
                </div>
                <div className="mt-5">
                    <h1 className="fw-bold text-dark">OUR DOCTORS</h1>
                    <p className="text-muted">Our doctors are specialized in their field and have more than 10 years of experiences.</p> 
                </div>
                <div className="container border-bottom border-danger w-25 "></div>
                <div  className="row row-cols-1 row-cols-sm-2 row-cols-md-4 my-5">
                    {
                        doctors.map(doctor => <DoctorsDetails
                        key={doctor.id}
                        doctor={doctor}
                        />)
                    }
                    </div>
                <div className="mt-5">
                    <h1 className="fw-bold text-dark">OUR SERVICES</h1>
                </div>
                <div className="container border-bottom border-danger w-25 "></div>
                <div className="mt-5">
                    <h1 className="fw-bold text-dark">HOSPITAL DEPARTMENTS</h1>
                </div>
                <div className="container border-bottom border-danger w-25 "></div>
                <div className="mt-5">
                    <h1 className="fw-bold text-dark">TESTIMONIALS</h1>
                </div>
                <div className="container border-bottom border-danger w-25 "></div>
            </div>
        </>
    );
};

export default Home;