import React, { useState } from "react";
import Banner from "./Banner";
import MoveCard from "./MoveCard";
import { useLoaderData, NavLink } from "react-router-dom";
import ComingSoon from "../pages/ComingSoon";
import WebSeries from "../pages/WebSeries";

const Home = () => {
  const data = useLoaderData();

  // First 6 movies for the home page
  const [moveData] = useState(data.slice(0, 6));

  return (
    <div>
      {/* Banner Section */}
      <div>
        <Banner />
      </div>

      <div className="bg-gray-100 dark:bg-gray-900 py-5 text-gray-100 mb-5">
        <h1 className="text-2xl font-bold">Featured Movies</h1>
      </div>

      {/* Movie Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
    </div>
  );
};

export default Home;
