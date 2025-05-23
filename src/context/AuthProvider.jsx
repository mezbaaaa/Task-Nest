import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    const provider = new GoogleAuthProvider();


    const googleSignIn = ()=>{
        return signInWithPopup(auth,provider) 
    }
    const signoutUser=()=>{
        return signOut(auth)
    }
     useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('current user in userEffect',currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    } ,[])
    const userInfo={
        user,
        googleSignIn,
        signoutUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;