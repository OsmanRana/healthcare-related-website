import React from 'react';
import useDoctors from '../../hooks/useDoctors';
import useServices from '../../hooks/useServices';
import DoctorsDetails from '../Doctors/DoctorsDetails';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    const [doctors] = useDoctors()
    const [services] = useServices()

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
                {/* Phylosphy */}
                <div className="mt-5">
                    <h1 className="fw-bold text-dark">OUR PHILOSOPHY</h1>
                </div>
                <div className="container border-bottom border-danger w-25 mb-3 "></div>
                <div className="d-md-flex align-items-center my-5">
                    <div>
                        <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1452&q=80" className="img-fluid" alt="" />
                    </div>
                    <div>

                        <p className="text-muted text-start ms-5">
                            Patients have an important role to play at each stage of their care and the five safety tips will serve to encourage them to be more involved in their health care.
                            <br />
                            Patients can do a lot of small things to make their health-care experience as safe as possible.
                            <br />
                            Hospitals are places of recovery and healing but there are also safety risks for patients, such as infections, falls and medication errors that can happen despite our best efforts.
                        </p>
                    </div>
                </div>
                <hr />
                <div className="mt-5">
                    <h1 className="fw-bold text-dark">OUR DOCTORS</h1>
                    <p className="text-muted">Our doctors are specialized in their field and have more than 10 years of experiences.</p>
                </div>
                <div className="container border-bottom border-danger w-25 "></div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 my-5">
                    {
                        doctors?.map(doctor => <DoctorsDetails
                            key={doctor.id}
                            doctor={doctor}
                        />)
                    }
                </div>
                <hr />
                <div className="mt-5">
                    <h1 className="fw-bold text-dark">OUR SERVICES</h1>
                </div>
                <div className="container border-bottom border-danger w-25 "></div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 my-5">
                    {
                        services?.map(service => <Services
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>

            </div>
        </>
    );
};

export default Home;