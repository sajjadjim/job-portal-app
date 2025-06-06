import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init'
import axios from 'axios';

const AUthProvider = ({ children }) => {


    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // Email and password user create 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // user sign out function here do  ------------------------------------
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // sign in function work here ----------------------
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //     // sign with in google part -------------------------------------------
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    //-----------------------------------------------------------------------------------
    // on state change current user information show onm website 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if(currentUser?.email){
                const userData = {email : currentUser.email}
                axios.post('http://localhost:3000/jwt' , userData ,{
                    withCredentials:true,
                })
                .then(res =>{
                    console.log("Token Giver After JWT ",res.data)
                    // Local Storage Token use code 
                    // const token = res.data.token
                    // localStorage.setItem("Token " , token)
                }).catch(error=>{
                    console.log(error)
                })
            }
            // console.log(currentUser)
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // create here a custome auth Data for useing everywhere 
    const AuthData = {
        loading,
        // setUser,
        createUser,
        user,
        signIn,
        signInWithGoogle,
        signOutUser,
    };

    // User show the current user 
    // console.log(user)

    return (
        <AuthContext value={AuthData}>
            {children}
        </AuthContext>
    );
};

export default AUthProvider;