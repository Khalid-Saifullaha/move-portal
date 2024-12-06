import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeCotext } from "../context/ThemeContextProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeCotext);
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
      <li>
        <NavLink to={`/comingSoon`}>Coming Soon</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={`user`}>
            <div className="tooltip" data-tip={user?.displayName}>
              <div>
                <img
                  className="w-10 h-10 rounded-full "
                  src={user?.photo}
                  alt=""
                />
              </div>
            </div>
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-blue-700 flex text-white  justify-between items-center md:px-20  dark:bg-gray-900 dark:text-white">
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
              className="menu menu-sm dropdown-content  bg-black rounded-box z-[1] mt-3 w-52 py-2 shadow gap-4 " //dark:bg-gray-900 dark:text-white
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
          <button className="text-2xl text-black" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
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
