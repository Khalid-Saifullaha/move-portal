import React from "react";
import { NavLink } from "react-router-dom";

const MoveCard = ({ move }) => {
  const { _id, photo, name, genre, duration, release, rating, summary } = move;
  return (
    <div className="">
      <div className="card pl-1 bg-base-100 w-96 h-[600px] mx-auto shadow-xl dark:bg-gray-900 dark:text-white">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="md:ml-3 ml-1 flex flex-col items-start justify-center">
          <h2 className="card-title text-3xl">{name}</h2>
          <div className="">
            <span className="font-semibold ">Rating:</span> {rating}
          </div>
          <div className=" flex flex-col gap-y-2 text-left">
            <div className="">
              <span className="font-semibold ">Release:</span> {release}
            </div>
            <div className="">
              <span className="font-semibold ">Genre:</span> {genre}
            </div>
            <div className="">
              <span className="font-semibold ">Duration:</span> {duration} min
            </div>

            <p className="my-1">{summary}</p>
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
