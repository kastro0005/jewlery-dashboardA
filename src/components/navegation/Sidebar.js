import React from "react";
import {
  HomeIcon,
  PlusIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    {
      name: "Anillos",
      href: "/Anillos",
      icon: PlusIcon,
      current: location.pathname === "/Anillos" ? true : false,
    },
    {
      name: "Cadenas",
      href: "/Cadenas",
      icon: PlusIcon,
      current: location.pathname === "/Cadenas" ? true : false,
    },
    {
      name: "Brazaletes",
      href: "/Brazaletes",
      icon: PlusIcon,
      current: location.pathname === "/Brazaletes" ? true : false,
    },
    {
      name: "Tobilleras",
      href: "/Tobilleras",
      icon: PlusIcon,
      current: location.pathname === "/Tobilleras" ? true : false,
    },
    {
      name: "Aretes",
      href: "/Aretes",
      icon: PlusIcon,
      current: location.pathname === "/Aretes" ? true : false,
    },
    {
      name: "Pircings",
      href: "/Pircings",
      icon: PlusIcon,
      current: location.pathname === "/Pircings" ? true : false,
    },
    {
      name: "Dijes",
      href: "/Dijes",
      icon: PlusIcon,
      current: location.pathname === "/Dijes" ? true : false,
    },
  ];

  return (
    <div className="ml-3 mt-5">
      <NavLink
        key="Dashboard"
        to="/Dashboard"
        className={classNames(
          location.pathname === "/Dashboard"
            ? true
            : false
            ? "bg-gray-100 text-gray-900"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        )}>
        <HomeIcon
          className={classNames(
            location.pathname === "/Dashboard"
              ? true
              : false
              ? "text-gray-500"
              : "text-gray-400 group-hover:text-gray-500",
            "mr-3 flex-shrink-0 h-6 w-6"
          )}
          aria-hidden="true"
        />
        Dashboard
      </NavLink>

      <Popover>
        <Popover.Button
          className={classNames(
            location.pathname === "/Dashboard"
              ? true
              : false
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group px-2 py-2 font-medium rounded-md inline-flex items-center gap-x-1 text-sm"
          )}>
          <RectangleGroupIcon
            className={classNames(
              location.pathname === "/Dashboard"
                ? true
                : false
                ? "text-gray-500"
                : "text-gray-400 group-hover:text-gray-500",
              "mr-2 flex-shrink-0 h-6 w-6"
            )}
            aria-hidden="true"
          />
          <span>Productos</span>
          <ChevronDownIcon
            className={classNames(
              location.pathname === "/Dashboard"
                ? true
                : false
                ? "text-gray-500"
                : "text-gray-400 group-hover:text-gray-500",
              "mr-3 flex-shrink-0 h-6 w-6"
            )}
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1">
          <Popover.Panel className="mt-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md ml-5"
                )}>
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-gray-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            ))}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Sidebar;
