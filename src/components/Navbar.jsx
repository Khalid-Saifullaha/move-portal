import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navbarLinks = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/allMovies`}>All Movies</NavLink>
      </li>
      <li>
        <NavLink to={`/addMovie`}>Add Movie</NavLink>
      </li>
      <li>
        <NavLink to={`/favorites`}>My Favorites</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-black flex text-white  justify-between items-center  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-black rounded-box z-[1] mt-3 w-52 py-2 shadow gap-4"
            >
              {navbarLinks}
            </ul>
          </div>
          <h2 className=" text-xl font-extrabold">MOVIE PORTAL</h2>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-base gap-2">
            {navbarLinks}
          </ul>
        </div>
        <div>
          {user && user?.email ? (
            <button
              onClick={logOut}
              className="btn mr-4 btn-white hover:bg-slate-900 bg-black text-white  "
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="btn mr-4 btn-white hover:bg-slate-900 bg-slate-800 text-white "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
