import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faGear,
  faFileLines,
  faStar,
  faFolderOpen,
  faCaretDown,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../graphics/logo.svg";
import Content from "./Content";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Drive from "./Drive";
import { Route, Routes } from "react-router-dom";
import Error from "./ErrorPage";
import BoxiHP from "./BoxiHP";

import "./sidebar.css";

const Ldata = [
  {
    name: "Campaigns",
    icon: faEarthAmericas,
    arrow: faCaretDown,
    path: "/campaign/boxi",
  },
  {
    name: "Drive",
    icon: faFolderOpen,
    arrow: faCaretDown,
    path: "/drive/boxi",
  },
  { name: "Boxi Team", icon: faPeopleGroup, path: "/boxiteam/boxi" },
  { name: "Production", icon: faStar, path: "/production/boxi" },
  { name: "Fix List", icon: faFileLines, path: "/fixlist/boxi" },
  { name: "Settings", icon: faGear, path: "/settings/boxi" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "white" : "#20b96f",
      color: isActive ? "#20b96f" : "white",
    };
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-sm flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-green-600 main-div">
                    <div className="flex h-16 shrink-0 items-center">
                      <NavLink to="/boxi">
                        <img
                          className="h-8 w-auto logo"
                          src={logo}
                          alt="Your Company"
                        />
                      </NavLink>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-2">
                            {Ldata.map((item, index) => (
                              <li
                                key={item.name}
                                className={index < 1 ? "custom-class" : ""}
                              >
                                <NavLink
                                  className="group flex gap-x-4 rounded-md p-2 text-sm leading-6 font-semibold link"
                                  to={item.path}
                                  style={navStyle}
                                >
                                  <FontAwesomeIcon
                                    icon={item.icon}
                                    className="list-icons"
                                  />
                                  {item.name}
                                  {/* <FontAwesomeIcon
                                    icon={item.arrow}
                                    className={`arrow custom-arrow-${
                                      index + 1
                                    }`}
                                  /> */}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-auto lg:flex-col">
          <div className="flex grow flex-col overflow-y-auto bg-green-600 main-div">
            <div className="flex h-16 shrink-0 items-center">
              <NavLink to="/boxi">
                {" "}
                <img
                  className="h-8 w-auto logo"
                  src={logo}
                  alt="Your Company"
                />{" "}
              </NavLink>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-2">
                    {Ldata.map((item, index) => (
                      <li
                        key={item.name}
                        className={index < 1 ? "custom-class" : ""}
                      >
                        <NavLink
                          className="
                        group flex gap-x-4 rounded-md p-2 text-sm leading-6 font-semibold link"
                          to={item.path}
                          style={navStyle}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="list-icons"
                          />
                          {item.name}
                          {/* <FontAwesomeIcon
                            icon={item.arrow}
                            className={`arrow custom-arrow-${index + 1}`}
                          /> */}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72 allContent">
          <div className="flex h-16 shrink-0 items-center gap-x-4  px-4  sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="toggle -m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Header />
          </div>

          <main className="py-10">
            <Routes>
              <Route exact path="/boxi" element={<BoxiHP />} />
              <Route exact path="/campaign/boxi" element={<Content />} />
              <Route exact path="/drive/boxi" element={<Drive />} />
              <Route exact path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
