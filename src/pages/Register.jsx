import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useForm } from "react-hook-form";

const Register = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createNewUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch(() => {});
  };

  const onSubmit = (data) => {
    const { name, photo, email, password } = data;

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");

        // Update user profile
        user
          .updateProfile({
            displayName: name,
            photoURL: photo,
          })
          .catch(() => {});
      })
      .catch(() => {});
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
              })}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
            />
            {errors.name && (
              <label className="label text-sm text-red-600">
                {errors.name.message}
              </label>
            )}
          </div>
          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              {...register("photo", { required: "Photo URL is required" })}
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
            />
            {errors.photo && (
              <label className="label text-sm text-red-600">
                {errors.photo.message}
              </label>
            )}
          </div>
          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email format",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
            />
            {errors.email && (
              <label className="label text-sm text-red-600">
                {errors.email.message}
              </label>
            )}
          </div>
          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                  message:
                    "Password must contain at least one uppercase and one lowercase letter",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
            />
            {errors.password && (
              <label className="label text-sm text-red-600">
                {errors.password.message}
              </label>
            )}
          </div>
          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none" type="submit">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </p>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-primary text-white rounded-3xl mt-5 flex items-center justify-center"
        >
          <FcGoogle className="text-2xl mr-2" /> Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
