/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from './../firebase/firebase.config';
export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {
    // const authInfo ={name: 'hudai kali na kucu na '}
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe =
            onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)
                console.log("feribfrjfbrfjrjfboserbing", createUser);
                setLoading(false);
            })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = { loading,user, createUser, signInUser,logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};
export default Authprovider;