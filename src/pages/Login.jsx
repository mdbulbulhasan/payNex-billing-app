
import React, { use, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        
        alert("Login Successfully");
        navigate(`${location.state ? location.state : "/"}`);
        // alert("Login Successfully");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorCode);
        setError(errorMessage);
      });
  };

  // Google Sigin handler
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Sigin Successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <h2 className="text-center text-3xl font-bold border-b py-3 border-accent">
          Login Now!
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-base-300"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input bg-base-300"
              placeholder="Password"
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <Link onClick={handleGoogleSignIn} className="btn btn-secondary">
              SignIn With <FcGoogle size={28} />
            </Link>
            <p className="font-semibold text-center pt-5">
              Don't Have an Account ?{" "}
              <Link to="/auth/register" className="text-secondary ">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
