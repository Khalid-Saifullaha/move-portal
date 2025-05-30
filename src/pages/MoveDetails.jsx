import React, { useContext, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MoveDetails = () => {
  const move = useLoaderData();
  const { _id, photo, name, genre, duration, release, rating, summary } = move;
  const [moves, setMoves] = useState(move);
  const { user } = useContext(AuthContext);

  const handleAddToFavorites = (movie) => {
    // if (user?.email) return;
    fetch("https://assignment-10-server-ebon-zeta.vercel.app/favorites", {
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
    // console.log(_id);
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
        fetch(`https://assignment-10-server-ebon-zeta.vercel.app/move/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
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
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center ">
            <NavLink to={`/allMovies`}>
              <button
                onClick={() => handleDelete(_id)}
                className="btn  bg-gradient-to-r from-indigo-900/70 via-purple-800/60 to-pink-700/70 text-white font-bold"
              >
                Delete Movie
              </button>
            </NavLink>

            <button
              onClick={() => handleAddToFavorites(move)}
              className="btn bg-gradient-to-r from-indigo-900/70 via-purple-800/60 to-pink-700/70 text-white font-bold my-3 md:mx-3"
            >
              Add to Favorite
            </button>

            <NavLink to={`/update/${_id}`}>
              <button className="btn bg-gradient-to-r from-indigo-900/70 via-purple-800/60 to-pink-700/70 text-white font-bold">
                Updated Move
              </button>
            </NavLink>
            <NavLink to={`/allMovies`}>
              <button className="btn bg-gradient-to-r from-indigo-900/70 via-purple-800/60 to-pink-700/70 text-white font-bold">
                See all movies
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveDetails;
