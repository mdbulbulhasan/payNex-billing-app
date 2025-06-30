import React from "react";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const handlePayBills = () => {
    navigate("/bills");
  };

  return (
    <div className="space-y-10 px-5 lg:px-0">
      {/* Hero Section */}
      <div className="flex lg:flex-row flex-col h-[550px] gap-5 lg:pl-24">
        <div className="lg:w-[50%]">
          <h1 className="lg:text-5xl text-3xl font-bold">
            Seamless Bill Payments with{" "}
            <span className="text-secondary">PAYNEX</span>
          </h1>
          <p className="py-6">
            Simplify your life with secure, fast, and hassle-free utility bill
            payments. With PAYNEX, manage all your bills in one place — anytime,
            anywhere.
          </p>
          <button onClick={handlePayBills} className="btn btn-secondary">
            Pay Bills
          </button>
        </div>
        <Carousel />
      </div>

      {/* Section 1: Our Partners */}
      <div className="bg-gray-100 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {["DESCO", "NESCO", "WASA", "Titas Gas", "PGCB"].map((org, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-4 rounded-lg w-28 h-28 flex items-center justify-center font-semibold"
            >
              {org}
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Why Choose PAYNEX */}
      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose PAYNEX?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Secure Payments",
              desc: "Your data is protected with bank-grade encryption.",
            },
            {
              title: "Instant Processing",
              desc: "Real-time utility bill processing and confirmation.",
            },
            {
              title: "Available 24/7",
              desc: "Pay bills anytime from anywhere.",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 shadow-lg rounded-lg border">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: How It Works */}
      <div className="bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              title: "Choose Service",
              desc: "Select your desired utility bill or organization.",
            },
            {
              title: "Enter Details",
              desc: "Provide your account or reference number.",
            },
            {
              title: "Make Payment",
              desc: "Confirm and pay securely in seconds.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-6 rounded-lg text-center flex-1"
            >
              <div className="text-4xl font-bold text-secondary mb-2">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Customer Testimonials */}
      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Rahim Uddin",
              feedback:
                "PAYNEX is super easy to use. I pay my DESCO bills every month without any hassle.",
            },
            {
              name: "Ayesha Khatun",
              feedback:
                "Highly secure and fast. I love the experience of paying through PAYNEX!",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-6 shadow-sm">
              <p className="italic">“{item.feedback}”</p>
              <h4 className="mt-4 font-semibold text-secondary">
                — {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
