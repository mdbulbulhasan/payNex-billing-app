import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-base-200">
      <footer className="footer sm:footer-horizontal text-base-content p-10">
        <aside>
          <a className="text-secondary text-xl font-bold">PayNex</a>
          <p>
            Secure and reliable bill management platform. <br />
            Simplify your payments and stay on track.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Pay Bills</a>
          <a className="link link-hover">Transaction History</a>
          <a className="link link-hover">Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Account</h6>
          <a className="link link-hover">Login</a>
          <a className="link link-hover">Register</a>
          <a className="link link-hover">Profile</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="text-center mt-10 border-t pt-6 text-sm text-gray-500">
        © {currentYear} payNex. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
