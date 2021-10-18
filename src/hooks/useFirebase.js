import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initailizeAuthentication from '../firebase/firebase.init';

initailizeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

const logOut = () => {
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
      
}

    return {
        user,
        handleGoogleSignIn,
        logOut
    }

}

export default useFirebase;