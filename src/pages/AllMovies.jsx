import React from "react";
import { useLoaderData } from "react-router-dom";
import MoveCard from "../components/MoveCard";

const AllMovies = () => {
  const moves = useLoaderData();
  return (
    <div>
      <h2>Block buster Movies: {moves.length}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {moves.map((move) => (
          <MoveCard key={move._id} move={move}></MoveCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
