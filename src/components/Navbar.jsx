import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import {  ToastContainer } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logout Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/bills">Bills</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow btn"
          >
            {links}
          </ul>
        </div>
        <a className="text-secondary text-xl font-bold">PayNex</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center">
          
          <div className="text-xs lg:flex hidden">{user && user.email}</div>
        </div>
        {user ? (
          <Link
            onClick={handleLogOut}
            to="/auth/login"
            className="btn btn-primary"
          >
            Logout
          </Link>
        ) : (
          <>
            <Link to="/auth/register" className="btn btn-primary">
              Register
            </Link>
            <Link to="/auth/login" className="btn btn-primary">
              Login
            </Link>
          </>
        )}
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Navbar;
