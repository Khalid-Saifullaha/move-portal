import React, { useContext, useRef, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // navigate(location?.state?.from || "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const [error, setError] = useState({});

  return (
    <div className="flex justify-center">
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
            <label className="label">
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
        <button className="btn btn-primary text-white rounded-3xl mt-5 flex items-center justify-center">
          <FcGoogle className="text-2xl mr-2" /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
