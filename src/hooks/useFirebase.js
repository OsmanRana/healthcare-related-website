import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initailizeAuthentication from '../firebase/firebase.init';

initailizeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    //Google Sign In
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    //SignInWithEmailAndPassword

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    //Email and Password Registraion
    const handleNameChange = event => {
        setName(event.target.value)
    }
    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }


    const handleRegistration = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setError('')
                verifyEmail();
                setUserName();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    //Set user name
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(result => {
            
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });

    }
    //Email Verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            });

    }
    //Forget password
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [auth])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }

    const handleEmailVarificationMessage = () => {
        if (!error) {
            return;
        }
        else {
            alert("An Email varification mail sent, please varify your email address!!!");
        }
        
    }

    return {
        user,
        error,
        handleGoogleSignIn,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogin,
        resetPassword,
        handleEmailVarificationMessage,
        logOut
    }

}

export default useFirebase;