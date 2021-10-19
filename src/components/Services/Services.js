import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const {id, name,image,description} = props.service
    return (
        <div>
            <Card className="border-0 shadow-sm my-3">
                <Card.Img className="my-3 img-fluid rounded mx-auto d-block" style={{height:'250px'}} variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description.slice(0,150)}
                    </Card.Text>
                    <Link to={`/servicedetail/${id}`}><Button className="mb-3" variant="primary">Read More</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;