import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, } from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    
        // user registration //
    const signUp = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password);
    }

            // user login //
    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth , email , password)
    }

    //context value 
    const authInfo = {
        signUp,
        signIn
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;