import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const MoveDetails = () => {
  const move = useLoaderData();
  const { _id, photo, name, genre, duration, release, rating, summary } = move;

  const handleDelete = (_id) => {
    console.log(_id);
  };

  return (
    <div className="">
      <div className="card bg-base-100 w-9/12 shadow-xl ">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{summary}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{genre}</div>
            <div className="badge badge-outline">{release}</div>
            <div className="badge badge-outline">{duration}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
          <div>
            <NavLink to={`/details/${_id}`}>
              <button
                onClick={() => handleDelete(_id)}
                className="btn mb-3 md:mr-5 btn-primary text-white font-bold"
              >
                Delete Movie
              </button>
            </NavLink>
            <NavLink to={`/details/${_id}`}>
              <button className="btn btn-primary text-white font-bold">
                Add to Favorite
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveDetails;
