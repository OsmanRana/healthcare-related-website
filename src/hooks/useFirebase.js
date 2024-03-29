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
    const [isLoading, setIsLoading] = useState(true)
    
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    //Google Sign In

    const handleGoogleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(()=> setIsLoading(false));
    }

    //SignInWithEmailAndPassword

    const handleLogin = event => {
        event.preventDefault();
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(()=> setIsLoading(false));
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
        
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          })
            handlePasswordChangeMassege();
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(()=> setIsLoading(false));

    }

    const handleEmailVarificationMessage = () => {
        if (!error) {
            return;
        }
        else {
            alert("An Email varification mail sent, please varify your email address!!!");
        }
        
    }
    const handlePasswordChangeMassege = () => {
        if (!error) {
            return;
        }
        else {
            alert("A password reset mail sent, please check your email !!!");
        }
            
    }

    return {
        user,
        isLoading,
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