import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="">
      <header className="bg-base-100 shadow-sm">
        <nav className="lg:w-10/12 lg:mx-auto mr-5">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="lg:w-10/12 lg:mx-auto mr-5">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
