import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Good job!", "Log Out Successfully!", "success");
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: ErrorMessage,
        });
      });
  };

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
                  ? "text-white bg-accent-focus text-lg font-bold underline"
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
                  ? "text-white bg-accent-focus text-lg font-bold underline"
                  : ""
              }
            >
              Services
            </NavLink>
            {
          user ? <></> :  <li>
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-accent-focus text-lg font-bold underline"
                : ""
            }
          >
            Register
          </NavLink>
        </li>
         }
          {
            user ? <></> :<li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-accent-focus text-lg font-bold underline"
                  : ""
              }
            >
              Log in
            </NavLink>
            
          </li>
          }
            {
            user ? (<li>
              <NavLink
                to="/event"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                Event
              </NavLink>
              
            </li>) : <p></p>
          }

{
            user ? (<li>
              <NavLink
                to="/booking"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                Booking
              </NavLink>
              
            </li>) : <p></p>
          }
          </ul>
        </div>
        <img
          className="md:h-20 h-28 md:ml-0 ml-10 hidden md:block"
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
                  ? "text-white bg-accent-focus text-lg font-bold underline"
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
                  ? "text-white bg-accent-focus text-lg font-bold underline"
                  : ""
              }
            >
              Services
            </NavLink>
          </li>

         {
          user ? <></> :  <li>
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white bg-accent-focus text-lg font-bold underline"
                : ""
            }
          >
            Register
          </NavLink>
        </li>
         }
          {
            user ? <></> :<li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-accent-focus text-lg font-bold underline"
                  : ""
              }
            >
              Log in
            </NavLink>
            
          </li>
          }

          {
            user ? (<li>
              <NavLink
                to="/event"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                Event
              </NavLink>
              
            </li>) : <p></p>
          }

{
            user ? (<li>
              <NavLink
                to="/booking"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white bg-accent-focus text-lg font-bold underline"
                    : ""
                }
              >
                Booking
              </NavLink>
              
            </li>) : <p></p>
          }

        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-5 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img className="w-full h-full object-cover" src={user.photoURL} alt="" />
            </div>
            <div>
              <h3 className="text-xl font-medium">{user.displayName}</h3>
            </div>
            </div>
            <div>
              <button className="btn btn-accent text-white font-medium" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <Link className="btn btn-accent text-white font-medium" to="/login">
            log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
