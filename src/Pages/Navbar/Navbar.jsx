

import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../assets/user.png";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.png"
import useAdmin from "../../hooks/useAdmin";
import useSurveyor from "../../hooks/useSurveyor";
import useProUser from "../../hooks/useProUser";
  
const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isAdmin] = useAdmin();
  const [isSurveyor] =useSurveyor();
  const [isProUser] = useProUser();
  console.log(isProUser);

  // const handleSignOut = () => {
  //   logOut()
  //     .then((result) => {
  //       console.log("user sign out", result);
  //     })
  //     .catch((error) => console.error(error));
  // };

  return (
    <div className="border-b   ">
      <div className="navbar  justify-between ">
        <div className="navbar-start ">
          <div className="dropdown ">
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
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div>
                <div className="flex flex-col gap-6">
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-red-500 text-xl underline"
                            : "text-xl"
                        }
                      >
                        Home
                      </NavLink>
                    </li>

                    {
                    isAdmin || isSurveyor ?<>
                    <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-red-500 text-xl underline"
                          : " text-xl "
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                    </>
                    : ''
                  }

                    <li>
                      <NavLink
                        to="/survey"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-red-500 text-xl underline"
                            : "text-xl"
                        }
                      >
                        Our Survey
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/pricing"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "text-red-500 text-xl underline"
                            : "text-xl"
                        }
                      >
                        Pricing
                      </NavLink>
                    </li>
                    
                    <li>
                      {user ? (
                        <button onClick={logOut} className="btn btn-sm">
                          Sign Out
                        </button>
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <div className=" w-52">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">
            <div>
              <div className=" gap-6">
                <ul className="flex gap-8">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-red-500 text-xl underline"
                          : "text-xl "
                      }
                    >
                      Home
                    </NavLink>
                  </li>

                  {/* ----end----- */}
                  {
                    isAdmin || isSurveyor ?<>
                    <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-red-500 text-xl underline"
                          : " text-xl "
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                    </>
                    : ''
                  }
                  <li>
                    <NavLink
                      to="/survey"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-red-500 text-xl underline"
                          : " text-xl "
                      }
                    >
                      Our Survey
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pricing"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-red-500 text-xl underline"
                          : " text-xl "
                      }
                    >
                      Pricing
                    </NavLink>
                  </li>
                  
                </ul>
              </div>
            </div>

          </ul>
        </div>
        
        <div className="navbar-end">
         {
          isProUser && <>
           <div>
            <img className="w-10" src="https://i.ibb.co/cNWkGRC/pro-bage.png" alt="" />
          </div>
          </>
         }

          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user.photoURL} />
                  ) : (
                    <img src={userDefaultPic} />
                  )}
                </div>
              </label>

              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm btn-ghost">
                    {user?.email}
                  </button>
                </li>
                <li>
                  <button onClick={logOut} className="btn btn-sm">
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Login</button>
            </Link>
          )}
        </div>
        <div className="hidden lg:flex">
          {user ? (
            <button onClick={logOut} className="btn btn-sm">
              Sign Out
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
