import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const LogIn = () => {
    const { handleGoogleSignIn } = useAuth();
    const { handleEmailChange, handlePasswordChange, handleLogin, resetPassword, error } = useAuth();

    return (
        <div>

            <div className="container mt-5">
                <h1 className="text-primary my-3">Please Login here</h1>
                <Form onSubmit={handleLogin}>
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
                    <Button variant="primary" type="submit" className="my-3 mx-3">
                        Log In
                    </Button>
                    <Button variant="danger" type="submit" className="my-3" onClick={resetPassword}>
                        Forgot Password ?
                    </Button>
                    <p>Not registered yet? <Link to='/register'>Register Now</Link></p>
                </Form>
            </div>
            <p>OR</p>
            <Button onClick={handleGoogleSignIn} variant="warning">Sign In with Google</Button>
        </div>
    );
};

export default LogIn;