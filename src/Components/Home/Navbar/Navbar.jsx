import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-accent text-lg font-bold underline"
                  : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/Service"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-accent text-lg font-bold underline"
                  : ""
              }
            >
              Services
            </NavLink>
            <li>
          <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-accent text-lg font-bold underline"
                  : ""
              }
            >
              Register
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-accent text-lg font-bold underline"
                  : ""
              }
            >
              Log in
            </NavLink>
          </li>
          </ul>
        </div>
        <img
          className="md:h-20 h-28 md:ml-0 ml-10"
          src="https://i.ibb.co/gzCkRs1/Event-wizard.jpg"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-accent text-lg font-bold underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Services"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-accent text-lg font-bold underline"
                  : ""
              }
            >
              Services
            </NavLink>
          </li>

          <li>
          <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-accent text-lg font-bold underline"
                  : ""
              }
            >
              Register
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-accent text-lg font-bold underline"
                  : ""
              }
            >
              Log in
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
