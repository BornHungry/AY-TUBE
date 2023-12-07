import React from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MyAuthContext } from "./context/ContextAuth";
import { useContext } from "react";
function Navbar({ login }) {
  const { logoutFunc } = useContext(MyAuthContext);
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__navbar-left">
          <h2 className="navbar__navbar-left__logo text-3xl font-bold">
            AY TUBE
          </h2>
        </div>

        <div className="navbar__navbar-right">
          <Disclosure
            as="nav"
            style={{
              backgroundColor: "#111827",
            }}
          >
            {({ open }) => (
              <>
                <div className="mx-auto mt-15 max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center justify-end w-full">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="sm:hidden  inline-flex items-center justify-center rounded-md p-2 text-red-600 font-bold hover:text-red-600 focus:outline-none  focus:ring-red-600">
                        <span className="-inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {!open ? (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4 navbar__navbar-right">
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "acitve" : "deactive"
                          }
                          to={"/home"}
                        >
                          Home
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "acitve" : "deactive"
                          }
                          to={"/favorites"}
                        >
                          Favorites
                        </NavLink>
                        {login ? (
                          <NavLink to={"/"}>
                            <button
                              onClick={logoutFunc}
                              style={{
                                padding: "8px 16px",
                                backgroundColor: "red",
                                margin: "0px",
                              }}
                              className="button-logout"
                            >
                              Logout
                            </button>
                          </NavLink>
                        ) : (
                          <>
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? "button-active" : "button-deactive"
                              }
                              to={"/"}
                            >
                              Login
                            </NavLink>
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? "button-active" : "button-deactive"
                              }
                              to={"/signin"}
                            >
                              SignIn
                            </NavLink>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel
                  style={{ backgroundColor: "red", width: "50%" }}
                  className="sm:hidden absolute top-25 right-0 "
                >
                  <div className="space-y-1 px-2 pb-5 pt-5 ">
                    <Disclosure.Button
                      style={{ marginTop: "12px" }}
                      className="block "
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "acitve-disclosure" : "deactive-disclosure"
                        }
                        to={"/home"}
                      >
                        Home
                      </NavLink>
                    </Disclosure.Button>
                    <Disclosure.Button
                      style={{ marginTop: "12px" }}
                      className="block"
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "acitve-disclosure" : "deactive-disclosure"
                        }
                        to={"/favorites"}
                      >
                        Favorites
                      </NavLink>
                    </Disclosure.Button>
                    {login ? (
                      <Disclosure.Button className="block">
                        <NavLink to={"/"}>
                          <button
                            onClick={logoutFunc}
                            className="button-logout"
                          >
                            Logout
                          </button>
                        </NavLink>
                      </Disclosure.Button>
                    ) : (
                      <>
                        <Disclosure.Button
                          style={{ marginTop: "22px" }}
                          className="block "
                        >
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? "button-active-disclosure"
                                : "button-deactive-disclosure"
                            }
                            to={"/"}
                          >
                            Login
                          </NavLink>
                        </Disclosure.Button>
                        <Disclosure.Button style={{ marginTop: "22px" }}>
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? "button-active-disclosure"
                                : "button-deactive-disclosure"
                            }
                            to={"/signin"}
                          >
                            SignIn
                          </NavLink>
                        </Disclosure.Button>
                      </>
                    )}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
