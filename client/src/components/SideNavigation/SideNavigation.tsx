import React from "react";
import { NavItem } from "./NavItem";

export const SideNav = () => {
  return (
    <div className="hidden lg:block lg:col-span-4 xl:col-span-2">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="pb-8 space-y-1">
          <NavItem url="/" icon="Home" title="Home" />
          <NavItem url="/users" icon="Users" title="Users" />
          <NavItem url="/trending" icon="Trending" title="Trending" />
          <NavItem url="/logout" icon="Logout" title="Logout" />
        </div>
      </nav>
    </div>
  );
};
