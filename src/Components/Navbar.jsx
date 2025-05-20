import React, { useContext } from "react";
import ToggleButton from "./UI/ToggleButton";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/Context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logout successful",
      showConfirmButton: false,
      timer: 1500,
    });
    logout();
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" space-x-0.5 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Add-to-Find-Roommate">Add to Find Roommate</NavLink>
            </li>
            <li>
              <NavLink to="/Browse Listing">Browse Listing</NavLink>
            </li>
            <li>
              <NavLink to="/MyListing">My Listings </NavLink>
            </li>
            <li className=" block">
              <ToggleButton />
            </li>
          </ul>
        </div>
        <Link to={`/`} className="text-xl">
          Find <span className="text-purple-400">Flatmate</span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Add-to-Find-Roommate">Add to Find Roommate</NavLink>
          </li>
          <li>
            <NavLink to="/BrowseListing">Browse Listing</NavLink>
          </li>
          <li>
            <NavLink to="/MyListing">My Listings </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-x-2.5">
        <div className="sm:block hidden">
          <ToggleButton />
        </div>
        {user ? (
        <>
        <div>
          <img src={user?.photoURL} alt={user?.displayName} />
          <button className="btn bg-[var(--btn-primary)] text-gray-200" onClick={handleLogout}>Logout</button>
        </div>
        </>
        ) : (
          <>
            <Link to={`/Login`} className="btn btn-primary">
              Login
            </Link>
            <Link to={`/SignUp`} className="btn btn-primary">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
