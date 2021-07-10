import React from "react";
import { useHistory } from "react-router-dom";
import { NavIcon, NavigationIcons } from "./NavIcon";
import { useAuth } from "../../context/AuthContext";
interface Props {
  url: string;
  title: string;
  icon: NavigationIcons;
}

export const NavItem: React.FC<Props> = ({ url, icon, title }) => {
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };
  const { setCurrentUser } = useAuth();
  let current = window.location.href.slice(21, 30);
  const history = useHistory();
  const handleClick = () => {
    if (url !== "/logout") {
      history.push(url);
    } else {
      if (window.confirm("Are you sure you want to logout?")) {
        setCurrentUser(null);
        localStorage.removeItem("token");
        history.push("/signup");
      }
    }
  };
  return (
    <div
      onClick={handleClick}
      className={classNames(
        current === url
          ? "bg-gray-200 text-gray-900 dark:bg-dracula-700 dark:text-gray-100" // Active
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dracula-700 dark:hover:text-gray-200", // Not Active
        "group flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer"
      )}
    >
      <NavIcon iconType={icon} url={url} />
      <span className="truncate">{title}</span>
    </div>
  );
};
