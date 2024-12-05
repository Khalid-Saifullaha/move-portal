import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col justify-center">
      <h2 className=" text-xl ">Welcome {user.displayName}</h2>
      <p>{user?.email}</p>
      <img src={user?.photo} className="rounded-full w-20 h-20" alt="" />
    </div>
  );
};

export default UserProfile;
