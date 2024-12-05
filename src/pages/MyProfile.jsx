import React, { useContext, useEffect, useState } from "react";

import { FaCamera } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [image, setImage] = useState(user?.photo || "");
  const [newImage, setNewImage] = useState(null);

  // Handle updating profile information
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (name !== user.displayName || newImage) {
      try {
        updateProfile(user, {
          displayName: name,
          photo: newImage ? URL.createObjectURL(newImage) : user.photo, // New image URL if updated
        });
        setUser({
          ...user,
          displayName: name,
          photo: newImage ? URL.createObjectURL(newImage) : user.photo,
        });
        alert("Profile updated successfully");
      } catch (error) {
        // console.error("Error updating profile:", error.message);
      }
    }
  };

  // Handle profile picture upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setImage(user.photo || "");
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="pr-10 text-center">
        <h2 className=" text-2xl font-bold">Welcome </h2>
        <h2 className=" text-xl "> {user.displayName}</h2>
        <p>{user?.email}</p>
      </div>
      <div className="card bg-base-100 w-full max-w-lg p-8 shadow-lg">
        <h2 className="font-bold text-2xl text-center">My Profile</h2>

        <div className="flex justify-center mt-6">
          <div className="relative">
            <img
              src={image || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-2 border-gray-300"
            />
            <label
              htmlFor="profile-image"
              className="absolute bottom-0 right-0 p-2 bg-gray-700 text-white rounded-full cursor-pointer"
            >
              <FaCamera />
            </label>
            <input
              id="profile-image"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <form onSubmit={handleUpdateProfile} className="mt-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              className="input input-bordered w-full"
              disabled
            />
          </div>

          <div className="form-control mt-6">
            <NavLink to={"/update"}>
              <button
                className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
                type="submit"
                disabled={loading}
              >
                Update Profile
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
