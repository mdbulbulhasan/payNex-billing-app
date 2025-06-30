import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { NavLink } from "react-router";


const Bills = () => {
  const [billsData, setBillsData] = useState([]);
  const [loading, setLoading] = useState(true);
  // 

  useEffect(() => {
    fetch("/billdata.json")
      .then((res) => res.json())
      .then((data) => {
        setBillsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch bills:", err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>;
    }
  return (
    <div className="card w-full ">
      <div className="card-body">
        <div className="space-y-10">
          {billsData.map((bill) => (
            <div
              key={bill.id}
              className=" bg-base-100 shadow-xl p-10 rounded-2xl"
            >
              <div className="flex justify-around items-center">
                <div className="text-3xl font-bold">{bill.bill_type}</div>
                <div>
                  <img className="w-[160px] h-[160px]" src={bill.icon} alt="" />
                </div>
              </div>
              <div className="mt-6">
                <NavLink
                  to={`/bill/${bill.id}`}
                  className="btn btn-secondary btn-block"
                >
                  Pay Bill
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bills;
