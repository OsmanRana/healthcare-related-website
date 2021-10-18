import { useContext } from "react"
import { AuthContext } from "../authProvider/AuthProvider"
import useFirebase from "./useFirebase";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;