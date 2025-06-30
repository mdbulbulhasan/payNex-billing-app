import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  // const [name, setName] = useState(user?.displayName || "");
  // const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        alert("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((error) => {
        alert("Error updating profile: " + error);
        setUser(user);
      });
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-md bg-base-100 shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered"
            
            
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
            
            
            required
          />
          <button type="submit" className="btn btn-success">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
