import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="container pl-20 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
          >
            <span className="ml-1 text-xl">OTT-Meet</span>
          </NavLink>

          <nav className="items-end pl-96 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `mr-8 hover:text-red-600 ${
                  isActive ? "text-red-600" : "text-base"
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/Youtube"
              className={({ isActive }) =>
                `mr-8 hover:text-red-600 ${
                  isActive ? "text-red-600" : "text-base"
                }`
              }
            >
              YOUTUBE
            </NavLink>

            <NavLink
              to="/Omeet"
              className={({ isActive }) =>
                `mr-8 hover:text-red-600 ${
                  isActive ? "text-red-600" : "text-base"
                }`
              }
            >
              OMEET
            </NavLink>

            <div className="flex items-center space-x-4 tracking-tight">
              <Link to="/Login">
                <button className="px-3 py-1 text-black transition duration-700 ease-out bg-red-900 border border-red-900 rounded-lg hover:bg-black hover:border hover:text-white dark:border-red-600 dark:bg-inherit dark:text-white dark:hover:text-red-600">
                  Log In
                </button>
              </Link>

              <Link to="/Signup">
                <button className="px-2 py-1 text-white transition duration-500 ease-out bg-red-700 rounded-lg hover:bg-red-800 hover:ease-in">
                  Sign Up
                </button>
              </Link>
            </div>
            {/* <div className="navbar_menu"></div>
            <img width="30px" height="30px" src="https://img.icons8.com/ios-filled/50/e50914/menu--v6.png" alt="Hamburger404" /> */}
          </nav>
          {/* <div class="dropdown_menu">
      <li><NavLink
              to="/"
              className={({ isActive }) =>
                `mr-8 hover:text-red-600 ${
                  isActive ? "text-red-600" : "text-base"
                }`
              }
            >
              HOME
            </NavLink></li>
      <li><NavLink
              to="/"
              className={({ isActive }) =>
                `mr-8 hover:text-red-600 ${
                  isActive ? "text-red-600" : "text-base"
                }`
              }
            >
              YOUTUBE
            </NavLink></li>
      <li><NavLink
              to="/"
              className={({ isActive }) =>
                `mr-8 hover:text-red-600 ${
                  isActive ? "text-red-600" : "text-base"
                }`
              }
            >
              OMEET
            </NavLink></li>
      <li><Link to="/Login">
                <button className="px-3 py-1 text-black transition duration-700 ease-out bg-red-900 border border-red-900 rounded-lg hover:bg-black hover:border hover:text-white dark:border-red-600 dark:bg-inherit dark:text-white dark:hover:text-red-600">
                  Log In
                </button>
              </Link></li>
      <li><Link to="/Signup">
                <button className="px-2 py-1 text-white transition duration-500 ease-out bg-red-700 rounded-lg hover:bg-red-800 hover:ease-in">
                  Sign Up
                </button>
              </Link></li>
    </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
