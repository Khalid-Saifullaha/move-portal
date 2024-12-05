import { useLoaderData } from "react-router-dom";
import MoveCard from "../components/MoveCard";
import { useEffect, useState } from "react";

const AllMovies = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");
  const [moveData, setMoveData] = useState(data);

  useEffect(() => {
    fetch(`http://localhost:4000/move?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMoveData(data);
      });
  }, [search]);

  return (
    <div>
      <div className="w-[400px] mx-auto my-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {moveData.map((move) => (
          <MoveCard key={move._id} move={move}></MoveCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
