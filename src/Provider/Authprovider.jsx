/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from './../firebase/firebase.config';
export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {
    // const authInfo ={name: 'hudai kali na kucu na '}
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe =
            onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)
                console.log("feribfrjfbrfjrjfboserbing", createUser);
            })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = { user, createUser, signInUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;