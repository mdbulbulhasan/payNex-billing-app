import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Loading from "../components/Loading";

const BillsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bill, setBill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const paidBills = JSON.parse(localStorage.getItem("paidBills")) || [];
    if (paidBills.includes(parseInt(id))) {
      setIsPaid(true);
    }

    fetch("/billdetails.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch bill data.");
        return res.json();
      })
      .then((data) => {
        const foundBill = data.find((item) => item.id === parseInt(id));
        setBill(foundBill);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handlePayment = () => {
    const paidBills = JSON.parse(localStorage.getItem("paidBills")) || [];

    if (!paidBills.includes(bill.id)) {
      paidBills.push(bill.id);
      localStorage.setItem("paidBills", JSON.stringify(paidBills));
    }

    alert("Payment successful!");

    navigate("/bills");
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (!bill) return <div>No bill found</div>;

  return (
    <div className="flex items-center justify-between lg:gap-20 p-6 rounded-lg shadow-2xl max-w-4xl lg:mx-auto mx-2 bg-base-300 mb-[5%]">
      <div className="relative w-1/2 flex justify-center items-center my-20">
        <img
          src={bill.organization_image}
          alt={bill.organization}
          className="w-full h-auto object-contain rounded-2xl"
        />
        <img
          src={bill.icon}
          alt={bill.bill_type}
          className="absolute bottom-2 right-2 w-16 h-16 border-2 border-white bg-white rounded-md shadow-md"
        />
      </div>

      <div className="w-1/2 pl-6">
        <h2 className="text-xl font-bold">{bill.organization}</h2>
        <p className="italic text-gray-600">{bill.bill_type} Bill</p>
        <p className="mt-2">
          <span className="font-semibold">Amount:</span>{" "}
          <span className="text-lg font-bold">{bill.amount} BDT</span>
        </p>
        <p className="mt-1">
          <span className="font-semibold">Due Date:</span>{" "}
          {new Date(bill.due_date + ":00:00").toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {isPaid ? (
          <div className="mt-4 text-green-600 font-semibold flex items-center gap-2">
            ✅ Already Paid
          </div>
        ) : (
          <button
            onClick={handlePayment}
            className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition cursor-pointer"
          >
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default BillsDetails;
