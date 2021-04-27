import {
  HomeIcon,
  FireIcon,
  UserGroupIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";
import React from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Popular", href: "#", icon: FireIcon, current: false },
  {
    name: "Communities",
    href: "#",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Trending",
    href: "#",
    icon: TrendingUpIcon,
    current: false,
  },
];
export const SideNav = () => {
  return (
    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="pb-8 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50",
                "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};
