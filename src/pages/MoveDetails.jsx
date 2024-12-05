import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MoveDetails = () => {
  const move = useLoaderData();
  const { _id, photo, name, genre, duration, release, rating, summary } = move;
  const [moves, setMoves] = useState(move);

  const handleAddToFavorites = (movie) => {
    fetch("http://localhost:4000/move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added!",
            text: "Movie added to your favorites.",
            icon: "success",
          });
        }
      });
  };

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
      <div className="card bg-slate-900 text-slate-100 w-full mx-auto shadow-xl grid md:grid-cols-2 ">
        <div>
          <figure>
            <img src={photo} alt="Shoes" />
          </figure>
        </div>
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
            <NavLink to={`/allMovies`}>
              <button
                onClick={() => handleDelete(_id)}
                className="btn  btn-primary text-white font-bold"
              >
                Delete Movie
              </button>
            </NavLink>

            <button
              onClick={() => handleAddToFavorites(move)}
              className="btn btn-primary text-white font-bold my-3 md:mx-3"
            >
              Add to Favorite
            </button>

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
