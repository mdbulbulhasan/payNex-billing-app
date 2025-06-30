import React, { use, useState } from "react";
import { Link  } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

const Register = () => {
  const [errors, setError] = useState({});
  // Destructuring createUser from AuthProvider
  const { createUser, setUser, updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const newErrors = {};

    if (name.length < 5) {
      newErrors.name = "Name should be more than 5 character.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 6 characters and contain a number.";
    }
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
    setError({});

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({  photoURL: photo })
          .then(() => {
            setUser({ ...user,  photoURL: photo });
            alert("Registration Successfull");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        
        
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <h2 className="text-center text-3xl font-bold border-b py-3 border-accent">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input bg-base-300"
              placeholder="Name"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-base-300"
              placeholder="Email"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input bg-base-300"
              placeholder="Photo URL"
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
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have an Account ?{" "}
              <Link to="/auth/login" className="text-secondary ">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
