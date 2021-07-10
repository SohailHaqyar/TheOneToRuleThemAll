import {
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  UserCircleIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import React from "react";

export type NavigationIcons =
  | "Home"
  | "Trending"
  | "Users"
  | "Profile"
  | "Logout";

type Props = React.FC<{
  iconType: NavigationIcons;
  url: string;
}>;

export const NavIcon: Props = ({ iconType, url }) => {
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };
  switch (iconType) {
    case "Home":
      return (
        <HomeIcon
          className={classNames(
            url === "/"
              ? "text-gray-500 dark:text-gray-50"
              : "text-gray-400 group-hover:text-gray-500",
            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
          )}
          aria-hidden="true"
        />
      );
    case "Trending":
      return (
        <FireIcon
          className={classNames(
            url === "/trending"
              ? "text-gray-500 dark:text-gray-50"
              : "text-gray-400 group-hover:text-gray-500",
            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
          )}
          aria-hidden="true"
        />
      );

    case "Users":
      return (
        <UserGroupIcon
          className={classNames(
            url === "/users"
              ? "text-gray-500 dark:text-gray-50"
              : "text-gray-400 group-hover:text-gray-500",
            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
          )}
          aria-hidden="true"
        />
      );

    case "Profile":
      return (
        <UserCircleIcon
          className={classNames(
            url === "/profile"
              ? "text-gray-500 dark:text-gray-50"
              : "text-gray-400 group-hover:text-gray-500",
            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
          )}
          aria-hidden="true"
        />
      );

    case "Logout":
      return (
        <LogoutIcon
          className={classNames(
            "text-gray-400 group-hover:text-gray-500 dark:text-gray-50 dark:group-hover:text-gray-50",
            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
          )}
          aria-hidden="true"
        />
      );

    default:
      return <div>Default Case</div>;
  }
};
