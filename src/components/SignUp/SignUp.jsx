import React, { useContext } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
const SignUp = () => {
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    //prottek bar error ke reset korte hobe ekhane
    setError("");

    if (password !== confirm) {
      setError("password does not match");
      return;
    } else if (password.length < 6) {
      setError("password must be at least 6 characters or more");
      return;
    }
    //ekhon sob validation par hoye createUser function ta call kore dibo.
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message); //set error e message shoho dite hobe
        console.log(error);
      });
  };

  return (
    <div className="loginpage">
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="form-control">
            <button className="btn btn-submit" type="submit" value="">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center">
          <small>
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </p>
        <p className="text-center text-error">
          <small>{error}</small>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
