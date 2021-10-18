import React from 'react';
import { Button, Card } from 'react-bootstrap';

const DoctorsDetails = (props) => {
    const { Name, image, specialty } = props.doctor

    return (
        <div>
            <Card className="border-0 shadow-sm">
                <Card.Img className="my-3 w-75 rounded   mx-auto d-block" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>
                    {specialty}
                    </Card.Text>
                    <Button className="mb-3" variant="primary">Experience</Button>
                </Card.Body>
            </Card>
            
            
        </div>
    );
};

export default DoctorsDetails;