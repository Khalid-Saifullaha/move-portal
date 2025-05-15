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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 font-semibold underline underline-offset-4"
              : "hover:text-amber-300 transition-colors duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allMovies"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 font-semibold underline underline-offset-4"
              : "hover:text-amber-300 transition-colors duration-300"
          }
        >
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addMovie"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 font-semibold underline underline-offset-4"
              : "hover:text-amber-300 transition-colors duration-300"
          }
        >
          Add Movie
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 font-semibold underline underline-offset-4"
              : "hover:text-amber-300 transition-colors duration-300"
          }
        >
          My Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/comingSoon"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 font-semibold underline underline-offset-4"
              : "hover:text-amber-300 transition-colors duration-300"
          }
        >
          Coming Soon
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 font-semibold underline underline-offset-4"
              : "hover:text-amber-300 transition-colors duration-300"
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/user" className="tooltip" data-tip={user?.displayName}>
            <img
              className="w-10 h-10 rounded-full hover:ring-2 ring-amber-300 transition duration-300"
              src={user?.photo}
              alt="User"
            />
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-gradient-to-r from-indigo-900/70 via-purple-800/60 to-pink-700/70 dark:bg-gray-900 dark:text-white">
      <div className="navbar max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 flex justify-between items-center text-white">
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
          <h2 className=" text-xl font-extrabold">CineStream</h2>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-base gap-2">
            {navbarLinks}
          </ul>
        </div>
        <div>
          <button className="text-2xl text-black" onClick={toggleTheme}>
            {theme === "light" ? (
              <FaMoon />
            ) : (
              <span className="text-white">
                <FaSun />
              </span>
            )}
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
