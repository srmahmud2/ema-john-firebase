import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //   const user = { displayName: "Mahmud" }; //eta to sample hisabe static use kore test korhci. but ekhon dynamic set kor

  const [user, setUser] = useState(null);

  //jehet ekta central jayga thek shob use korte chi tai ekhon function gula crearte kore nibo.

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }; //jehetu context er madhome eta onno jayga theke use korte chai tai ekhon ei fucntion authInfo context bosabo.

  //ebar singIn er kaj korbo
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }; //ebar ei signIn keo context e boasbao. authInfo te bosano mane context e bosano.

  //ebar signOut kroar jonno logOut name dibo jate firebase er sathe gondogol na kore.
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
