import { useSelector } from "react-redux";
import { BiCart } from "react-icons/bi";
import NavLinks from "./NavLinks";

import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

const themes = { winter: "winter", dracula: "dark" };

function darkModeFromLocalStorage() {
  return localStorage.getItem("mode") || themes.winter;
}

function Navbar() {
  // const { total } = useSelector((store) => store.products);

  const [theme, setTheme] = useState(darkModeFromLocalStorage());
  console.log(theme);

  const handleClick = () => {
    const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mode", theme);

    // Apply background style for dracula theme
    if (theme === themes.dracula) {
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.color = ""; // Reset for winter theme
    }
  }, [theme]);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="navbar bg-base-100 py-4 mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>

        <div className="navbar-end">
          <div className="flex gap-10 items-center">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onClick={() => handleClick()}
                defaultChecked={theme == "winter" ? true : false}
              />

              {/* sun icon */}
              <IoSunnyOutline className="w-8 h-8 swap-on fill-current" />

              {/* moon icon */}
              <IoMoonOutline className="w-8 h-8 swap-off fill-current" />
            </label>
          </div>
          <div className="indicator">
            <div className="indicator bg-white">
              <span className="indicator-item badge badge-secondary">
                {/* {total} */}
              </span>
              <button className="btn bg-inherit ">
                <BiCart className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
