import { Fragment, useState } from "react";
<<<<<<< HEAD
import { Dialog, Transition } from "@headlessui/react";
=======
import { Dialog, Menu, Transition } from "@headlessui/react";
>>>>>>> 96818a759ed67f51259dbd1be4c0539510e44c57
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import campaigns from "../graphics/sidebar icons/campaigns.svg";
import drive from "../graphics/sidebar icons/drive.svg";
import list from "../graphics/sidebar icons/list.svg";
import production from "../graphics/sidebar icons/production.svg";
import settings from "../graphics/sidebar icons/settings.svg";
import team from "../graphics/sidebar icons/team.svg";
import greenArrow from "../graphics/sidebar icons/greenArrow.svg";
import whiteArrow from "../graphics/sidebar icons/whiteArrow.svg";
<<<<<<< HEAD
import logo from "../graphics/logo.svg";
import Content from "./Content";
import Header from "../components/Header";

=======
import arrowDown from "../graphics/header icons/arrowDown.svg";
import logo from "../graphics/logo.svg";
import search from "../graphics/header icons/search.svg";
import notifications from "../graphics/header icons/notifications.svg";
import profileImg from "../graphics/header icons/profile.svg";
>>>>>>> 96818a759ed67f51259dbd1be4c0539510e44c57
import "./sidebar.css";

const Ldata = [
  {
    name: "Campaigns",
    href: "#",
    icon: campaigns,
    arrow: greenArrow,
    current: true,
  },
  { name: "Drive", href: "#", icon: drive, arrow: whiteArrow },
  { name: "Boxi Team", href: "#", icon: team },
  { name: "Production", href: "#", icon: production },
  { name: "Fix List", href: "#", icon: list },
  { name: "Settings", href: "#", icon: settings },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
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
                      <img
                        className="h-8 w-auto logo"
                        src={logo}
                        alt="Your Company"
                      />
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
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-white text-green-600"
                                      : "text-white",
                                    "group flex gap-x-4 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <img
                                    className="list-icons"
                                    src={item.icon}
                                    alt=""
                                  />
                                  {item.name}
                                  <img
                                    className="arrow"
                                    src={item.arrow}
                                    alt=""
                                  />
                                </a>
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

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col ">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-green-600 main-div">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-8 w-auto logo" src={logo} alt="Your Company" />
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
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-white text-green-600"
                              : "text-white",
                            "group flex gap-x-4 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <img className="list-icons" src={item.icon} alt="" />
                          {item.name}
                          <img className="arrow" src={item.arrow} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
<<<<<<< HEAD
          <div className="flex h-16 shrink-0 items-center gap-x-4  px-4  sm:gap-x-6 sm:px-6 lg:px-8">
=======
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  px-4  sm:gap-x-6 sm:px-6 lg:px-8">
>>>>>>> 96818a759ed67f51259dbd1be4c0539510e44c57
            <button
              type="button"
              className="toggle -m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Header />
            {/* Separator */}
<<<<<<< HEAD
=======
            <div
              className="seperator h-6 w-px bg-black lg:hidden"
              aria-hidden="true"
            />

            <div className="search flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>

                <img
                  className="search-icon pointer-events-none absolute inset-y-0 left-0 h-full w-4 text-gray-400 ml-3"
                  aria-hidden="true"
                  src={search}
                  alt=""
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <img src={notifications} alt="" />
                </button>
                {/* Separator */}

                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="lg:ml-2 h-8 w-8 rounded-full bg-gray-50"
                      src={profileImg}
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="userName text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Danielle Campbell
                      </span>
                      <img
                        className="ml-6 h-5 w-3 text-gray-400"
                        aria-hidden="true"
                        src={arrowDown}
                        alt=""
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
>>>>>>> 96818a759ed67f51259dbd1be4c0539510e44c57
          </div>

          <main className="py-10">
            <Content />
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
