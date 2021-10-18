import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration,handleGoogleSignIn, handleEmailVarificationMessage, error } = useAuth();
    return (
        <div className="container mt-5">
            <h1 className="text-primary my-3">Please Register here</h1>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onBlur={handleNameChange} type="text" placeholder="Your name please" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>
                <Button onClick={handleEmailVarificationMessage} variant="primary"  type="submit"  className="my-3">
                    Register
                </Button>
                <p>Already registered? <Link to='/login'>Log In</Link></p>
            </Form>
            <p>OR</p>
            <Button onClick={handleGoogleSignIn} variant="warning">Sign In with Google</Button>
        </div>
    );
};

export default Register;