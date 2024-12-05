import React, { useEffect, useState } from "react";

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/favorites")
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

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
              className="card bg-gray-800 text-white shadow-lg p-4"
            >
              <img
                src={movie.photo}
                alt={movie.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h2 className="text-xl font-bold">{movie.name}</h2>
              <p className="text-sm">{movie.genre}</p>
              <p className="text-sm">Duration: {movie.duration} mins</p>
              <p className="text-sm">Rating: {movie.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
