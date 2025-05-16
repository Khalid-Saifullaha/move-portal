import React, { useContext, useRef, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        navigate("/");
        toast.success("Logged in successfully!");
      })
      .catch((error) => {
        // console.log("ERROR", error);
        toast.error("Google login failed. Please try again.");
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state?.from || "/");
        toast.success("Logged in successfully!");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error("Login failed. Please check your credentials.");
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please provide a valid email address.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.error("Failed to send password reset email. Please try again.");
      })
      .catch((error) => {
        // console.error("Error sending password reset email:", error.message);
        alert("Failed to send password reset email. Please try again.");
      });
  };

  return (
    <div className="flex justify-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login to your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-2 top-12"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaEye />}
            </button>
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
            <label onClick={handleForgetPassword} className="label">
              <span className="label-text-alt link link-hover">
                Forgot password?
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none" type="submit">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don’t Have An Account?{" "}
          <Link to="/register" className="text-red-500">
            Register
          </Link>
        </p>
        <button
          onClick={handleGoogleLogin}
          className="btn bg-gradient-to-r from-indigo-900/70 via-purple-800/60 to-pink-700/70 text-white rounded-3xl mt-5 flex items-center justify-center"
        >
          <FcGoogle className="text-2xl mr-2" /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
