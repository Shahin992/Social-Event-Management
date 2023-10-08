import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUsers] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUsers(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        login
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;