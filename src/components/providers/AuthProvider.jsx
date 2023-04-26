import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //   const user = { displayName: "Mahmud" }; //eta to sample hisabe static use kore test korhci. but ekhon dynamic set kor

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //jehet ekta central jayga thek shob use korte chi tai ekhon function gula crearte kore nibo.

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }; //jehetu context er madhome eta onno jayga theke use korte chai tai ekhon ei fucntion authInfo context bosabo.

  //ebar singIn er kaj korbo
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }; //ebar ei signIn keo context e boasbao. authInfo te bosano mane context e bosano.

  //ebar signOut kroar jonno logOut name dibo jate firebase er sathe gondogol na kore.
  const logOut = () => {
    return signOut(auth);
  };

  //observer user auth state
  useEffect(() => {
    //normal onAuthStateChanged dile contious obseve korte thakbe tai const unsubscribe dite hobe jate logout kore chole gele ar observe na kore.

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // tarpor evabe unsubscribe k evabe return kore diye observing stop korte hobe.
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
