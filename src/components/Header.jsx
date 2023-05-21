import search from "../graphics/header icons/search.svg";
import notifications from "../graphics/header icons/notifications.svg";
import profileImg from "../graphics/header icons/profile.svg";
import arrowDown from "../graphics/header icons/arrowDown.svg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "./header.css";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  return (
    <>
      <div
        className="seperator h-6 w-px bg-black lg:hidden"
        aria-hidden="true"
      />
      <div className="search flex flex-1 gap-x-4 self-stretch ">
        <form className="relative flex flex-1" action="#">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>

          <img
            className="search-icon pointer-events-none absolute left-0 h-full w-4 "
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
    </>
  );
};

export default Header;
