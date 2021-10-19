import React from 'react';

const DoctorProfile = (props) => {
    const { Name, image, specialty, experience } = props.doctor
    return (
        <div className="container">
            <div className="my-5">
                <img src={image} alt="" />
                <h2 className="my-3">{Name}</h2>
                <h5>Speciality: {specialty}</h5>
                <p className="text-start">{experience}</p>
            </div>
        </div>
    );
};

export default DoctorProfile;