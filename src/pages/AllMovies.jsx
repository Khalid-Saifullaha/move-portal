import { useLoaderData } from "react-router-dom";
import MoveCard from "../components/MoveCard";

const AllMovies = () => {
  const loaderMoves = useLoaderData();

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {loaderMoves.map((move) => (
          <MoveCard key={move._id} move={move}></MoveCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
