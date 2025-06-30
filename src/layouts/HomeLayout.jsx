import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header className="bg-base-100 shadow-sm">
        <nav className="lg:w-10/12 lg:mx-auto lg:pl-26 mr-5">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="lg:w-10/12 mx-auto py-10">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
