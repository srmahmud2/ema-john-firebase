import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //erpor amora amader signIn function call korbo ar 2ta parametros dibo.
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        //success hole form reset kore dibo
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="loginpage">
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleLogin}>
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
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Your password"
              required
            />
            <p
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              <small>
                {showPassword ? <span>Hide pass</span> : <span>Show pass</span>}
              </small>
            </p>
          </div>
          <div className="form-control">
            <button className="btn btn-submit" type="submit" value="">
              Login
            </button>
          </div>
        </form>
        <p className="text-center">
          <small>
            New to Ema-John? <Link to="/signup">Create New Account</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
