import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();


    const googleSignIn = ()=>{
        return signInWithPopup(auth,provider) 
    }
    const user={
        googleSignIn,
    }
    return (
        <AuthContext value={user}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;