/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react';

import { useContext } from "react";
import  { AuthContext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";



const Privetroutes = ({children}) => {
    const { user, loading }= useContext(AuthContext)
    // console.log(user.email);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
   return<Navigate to="/login"></Navigate>
};

export default Privetroutes;