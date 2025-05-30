import { useLoaderData } from "react-router-dom";
import MoveCard from "../components/MoveCard";
import { useEffect, useState } from "react";

const AllMovies = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");
  const [moveData, setMoveData] = useState(data);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-ebon-zeta.vercel.app/move?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMoveData(data);
      });
  }, [search]);

  return (
    <div className="w-9/12 mx-auto ">
      <div className="md:w-[400px] mx-auto my-4 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full border-slate-600"
          required
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {moveData.map((move) => (
          <MoveCard key={move._id} move={move}></MoveCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
