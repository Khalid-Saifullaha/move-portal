import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const Register = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const { createNewUser, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more the 5 character long" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      setError({
        ...error,
        name: "Password must be at least 6 characters long.",
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError({
        ...error,
        password: "Password must contain at least one uppercase letter.",
      });
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError({
        ...error,
        password: "Password must contain at least one lowercase letter.",
      });
      return;
    }
    console.log({ name, email, password, photo });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className=" flex justify-center my-10">
      {/* <Helmet>
        <title>Register</title>
      </Helmet> */}
      <div className="card  w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          {/* name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
            {error.name && (
              <label className="label text-sm text-red-600">{error.name}</label>
            )}
          </div>
          {/* Photo  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo-URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* email input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* password input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.password && (
              <label className="label text-sm text-red-600">
                {error.password}
              </label>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already have An Account ?{" "}
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
