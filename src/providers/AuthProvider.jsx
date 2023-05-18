import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null)

  
      const provider = new GoogleAuthProvider

     
  //     const logInWithGoogle = () => {
  //       setLoading(true)
  //  return  signInWithPopup(auth, provider) 
  // }
  
  const logInWithGoogle = () =>{
    return signInWithPopup(auth, provider)
  }


      const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
      }

const signIn = (email, password) =>{
      return signInWithEmailAndPassword(auth, email, password)
}

// const logOut = () => {
//   setLoading(true);
//   return signOut(auth);
// }


const logOut = () => {
  return signOut(auth)
}

      useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('currentUser', currentUser);
        });
        return () =>{
            return unsubscribe()
        }

      }, [])


    const authData = {
          user,
          createUser,
          signIn,
          logInWithGoogle,
          logOut
    }

    return (
        <AuthContext.Provider value={authData}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;