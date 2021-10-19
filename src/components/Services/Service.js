import React from 'react';

const Service = (props) => {
    const { name, image, description } = props?.service
    return (
        <div className="container">
        <div className="my-5">
            <img src={image} alt="" />
            <h2 className="my-3">{name}</h2>
            <p className="text-start">{description}</p>
        </div>
    </div>
    );
};

export default Service;