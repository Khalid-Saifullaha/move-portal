import React, { useState } from "react";
import Banner from "./Banner";
import MoveCard from "./MoveCard";
import { useLoaderData, NavLink } from "react-router-dom";
import ComingSoon from "../pages/ComingSoon";
import WebSeries from "../pages/WebSeries";
import ContactUs from "../pages/ContuctUs";

const Home = () => {
  const data = useLoaderData();

  // Sort movies by rating
  const [moveData] = useState(
    [...data].sort((a, b) => b.rating - a.rating).slice(0, 8)
  );

  return (
    <div>
      {/* Banner Section */}
      <div>
        <Banner />
      </div>

      <div className="  py-5 text-sky-600 mb-5">
        <h1 className="text-xl font-bold text-center">Featured Movies</h1>
      </div>

      {/* Movie Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {moveData.map((move) => (
          <MoveCard key={move._id} move={move}></MoveCard>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center my-6">
        <NavLink to={`/allMovies`}>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            See All Movies
          </button>
        </NavLink>
      </div>
      <div>
        <WebSeries></WebSeries>
      </div>
      <ComingSoon></ComingSoon>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
