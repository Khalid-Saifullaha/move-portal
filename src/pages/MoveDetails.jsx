import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MoveDetails = () => {
  const move = useLoaderData();
  const { _id, photo, name, genre, duration, release, rating, summary } = move;
  const [moves, setMoves] = useState(move);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/move/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your move has been deleted.",
                icon: "success",
              });
              const remaining = moves.filter((mov) => mov._id !== _id);
              setMoves(remaining);
            }
          });
      }
    });
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
            <NavLink to={`/allMovies`}>
              <button
                onClick={() => handleDelete(_id)}
                className="btn  btn-primary text-white font-bold"
              >
                Delete Movie
              </button>
            </NavLink>
            <NavLink to={`/details/${_id}`}>
              <button className="btn btn-primary text-white font-bold my-3 md:mx-3">
                Add to Favorite
              </button>
            </NavLink>
            <NavLink to={`/update/${_id}`}>
              <button className="btn btn-primary text-white font-bold">
                Updated Move
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveDetails;
