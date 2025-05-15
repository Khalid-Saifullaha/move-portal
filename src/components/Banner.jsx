import React from "react";
import { CgClapperBoard } from "react-icons/cg";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white py-24 px-4 sm:px-6 lg:px-8 rounded-b-xl shadow-2xl overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-wide animate-fade-in-down">
          <CgClapperBoard className="inline-block w-12 h-12 sm:w-14 sm:h-14 mr-4 text-amber-400" />{" "}
          Your Ultimate Movie Destination
        </h1>

        <p className="text-xl sm:text-2xl mb-10 opacity-95 font-light animate-fade-in-up">
          Explore a universe of films, from action-packed thrillers to
          heartwarming dramas.
        </p>

        <button className="inline-block bg-amber-400 text-indigo-800 hover:bg-amber-300 font-bold text-lg py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110 shadow-lg uppercase tracking-wider animate-pulse-once">
          Start Exploring Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
