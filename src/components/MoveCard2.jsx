import React from "react";

const MoveCard2 = ({ move }) => {
  const { _id, photo, name, genre, duration, release, rating, summary } = move;
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-xl ">
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
        </div>
      </div>
    </div>
  );
};

export default MoveCard2;
