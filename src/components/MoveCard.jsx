import React from "react";
import { NavLink } from "react-router-dom";

const MoveCard = ({ move }) => {
  const { _id, photo, name, genre, duration, release, rating, summary } = move;
  return (
    <div className="">
      <div className="card bg-base-100 w-96 mx-auto shadow-xl dark:bg-gray-900 dark:text-white">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="md:ml-3 flex flex-col items-start justify-center">
          <h2 className="card-title text-3xl">{name}</h2>
          <p className="my-1">{summary}</p>
          <div className=" flex md:flex-col gap-y-3 text-left">
            <div className="">Genre: {genre}</div>
            <div className="">Release: {release}</div>
            <div className="">Duration: {duration} m</div>
            <div className="">Rating: {rating}</div>
          </div>
          <div>
            <NavLink to={`/details/${_id}`}>
              <button className="btn btn-primary text-white font-bold my-3">
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
