import {
  HomeIcon,
  FireIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

import React from "react";
import { useHistory } from "react-router-dom";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export const SideNav = () => {
  let current = window.location.href.slice(21, 30);
  const history = useHistory();
  const navigateTo = (path: string) => {
    history.push(path);
  };
  return (
    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="pb-8 space-y-1">
          <div
            onClick={() => navigateTo("/")}
            className={classNames(
              current === "/"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-600 hover:bg-gray-50",
              "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            )}
          >
            <HomeIcon
              className={classNames(
                current === "/"
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              )}
              aria-hidden="true"
            />
            <span className="truncate">Home</span>
          </div>

          <div
            onClick={() => navigateTo("/trending")}
            className={classNames(
              current === "/trending"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-600 hover:bg-gray-50",
              "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            )}
          >
            <FireIcon
              className={classNames(
                current === "/trending"
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              )}
              aria-hidden="true"
            />
            <span className="truncate">Trending</span>
          </div>

          <div
            onClick={() => navigateTo("/users")}
            className={classNames(
              current === "/users"
                ? "bg-gray-200 text-gray-900"
                : "text-gray-600 hover:bg-gray-50",
              "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            )}
          >
            <UserGroupIcon
              className={classNames(
                current === "/users"
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              )}
              aria-hidden="true"
            />
            <span className="truncate">Users</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
