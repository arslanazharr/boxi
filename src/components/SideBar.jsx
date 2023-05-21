import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import campaigns from "../graphics/sidebar icons/campaigns.svg";
import drive from "../graphics/sidebar icons/drive.svg";
import list from "../graphics/sidebar icons/list.svg";
import production from "../graphics/sidebar icons/production.svg";
import settings from "../graphics/sidebar icons/settings.svg";
import team from "../graphics/sidebar icons/team.svg";
import greenArrow from "../graphics/sidebar icons/greenArrow.svg";
import whiteArrow from "../graphics/sidebar icons/whiteArrow.svg";
import logo from "../graphics/logo.svg";
import Content from "./Content";
import Header from "../components/Header";

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
            {/* Separator */}
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
