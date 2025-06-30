import React from "react";
import { useNavigate } from "react-router";

const Profile = ({user}) => {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/profile/update");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center p-6 bg-base-200 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold">{user?.displayName}</h1>
        <p className="text-gray-500">{user?.email}</p>
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full"
        />

        <button onClick={handleUpdateClick} className="btn btn-primary">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
