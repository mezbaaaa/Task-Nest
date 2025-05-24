import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);


    const googleSignIn = ()=>{
        return signInWithPopup(auth,provider) 
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signoutUser=()=>{
        return signOut(auth)
    }
     useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('current user in userEffect',currentUser)
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>{
            unSubscribe()
        }
    } ,[])
    const userInfo={
        loading,
        user,
        googleSignIn,
        signoutUser,
        createUser,
        signInUser,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;