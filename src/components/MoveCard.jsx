import React from "react";
import { NavLink } from "react-router-dom";

const MoveCard = ({ move }) => {
  const { _id, photo, name, genre, duration, release, rating, summary } = move;
  return (
    <div className="">
      <div className="card bg-base-100 w-64 h-[400px] mx-auto shadow-lg rounded-lg overflow-hidden dark:bg-gray-900 dark:text-white">
        <figure className="h-48">
          <img
            src={photo}
            alt="Movie"
            className="w-full h-full object-contain  transition-transform duration-300 hover:scale-105"
          />
        </figure>
        <div className="p-3 flex flex-col items-start justify-center">
          <h2 className="card-title text-xl font-bold mb-2 truncate">{name}</h2>
          <div className="text-sm mb-3">
            <div>
              <span className="font-semibold">Rating:</span> {rating}
            </div>
            <div>
              <span className="font-semibold">Release:</span> {release}
            </div>
            <div>
              <span className="font-semibold">Genre:</span> {genre}
            </div>
            <div>
              <span className="font-semibold">Duration:</span> {duration} min
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
            {summary}
          </p>
          <div className="mt-auto w-full text-center">
            <NavLink to={`/details/${_id}`}>
              <button className="btn btn-primary text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400">
                See Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveCard;
