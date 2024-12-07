import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    fetch("https://assignment-10-server-ebon-zeta.vercel.app/favorites")
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

  const handleDelete = (_id) => {
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
        fetch(
          `https://assignment-10-server-ebon-zeta.vercel.app/favorites/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your favorite movie has been deleted.",
                "success"
              );
              const remainingFavorite = favorites.filter(
                (favorite) => favorite._id !== id
              );
              setFavorites(remainingFavorite);
            } else {
              Swal.fire("Error!", "Failed to delete the movie.", "error");
            }
          })
          .catch((error) => {
            // console.error("Error deleting the movie:", error);
            Swal.fire("Error!", "An unexpected error occurred.", "error");
          });
      }
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          No favorite movies added yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((movie) => (
            <div
              key={movie._id}
              className="card bg-sky-800 text-white shadow-lg p-4"
            >
              <img
                src={movie.photo}
                alt={movie.name}
                className="w-full h-[33rem] object-cover rounded-lg mb-3"
              />
              <h2 className="text-xl font-bold">{movie.name}</h2>
              <p className="text-sm">{movie.genre}</p>
              <p className="text-sm">Duration: {movie.duration} mins</p>
              <p className="text-sm">Rating: {movie.rating}</p>
              <button
                onClick={() => handleDelete(movie._id)}
                className="btn btn-warning"
              >
                Delete Favorite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
