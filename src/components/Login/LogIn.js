import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const LogIn = () => {
    const {handleGoogleSignIn} = useAuth();
    return (
        <div>
            <h2>This is login</h2>
            <Button onClick={handleGoogleSignIn} variant="light">Google Sign In</Button>
        </div>
    );
};

export default LogIn;