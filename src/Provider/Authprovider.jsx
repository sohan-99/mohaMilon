/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from './../firebase/firebase.config';
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

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

    const signInWithGoogle= ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
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
    const authInfo = { loading,user, createUser, signInWithGoogle, signInUser,logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};
export default Authprovider;