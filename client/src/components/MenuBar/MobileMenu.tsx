import { BellIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMeQuery } from "../../generated/graphql";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const MobileMenu = ({ isOpen }: any) => {
  const { data, loading } = useMeQuery({
    fetchPolicy: "network-only",
  });

  const [isCurrent, setIsCurrent] = useState(
    window.location.href.slice(21, 30)
  );
  const history = useHistory();
  const navigateTo = (path: string) => {
    setIsCurrent(path);
    history.push(path);
  };

  if (loading) return <div>Loading...</div>;
  userNavigation[0] = {
    name: "Your Profile",
    href: `/user/${data?.me.id}`,
  };

  return (
    <>
      <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
        <div
          onClick={() => navigateTo("/")}
          className={classNames(
            isCurrent === "/"
              ? "bg-gray-100 text-gray-900"
              : "hover:bg-gray-50",
            "block rounded-md py-2 px-3 text-base font-medium"
          )}
        >
          Home
        </div>

        <div
          onClick={() => navigateTo("/trending")}
          className={classNames(
            isCurrent === "/trending"
              ? "bg-gray-100 text-gray-900"
              : "hover:bg-gray-50",
            "block rounded-md py-2 px-3 text-base font-medium"
          )}
        >
          Trending
        </div>

        <div
          onClick={() => navigateTo("/users")}
          className={classNames(
            isCurrent === "/users"
              ? "bg-gray-100 text-gray-900"
              : "hover:bg-gray-50",
            "block rounded-md py-2 px-3 text-base font-medium"
          )}
        >
          Users
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4 pb-3">
        <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={
                data?.me.imageUrl ||
                "https://source.unsplash.com/random"
              }
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">
              {data?.me.username}
            </div>
            <div className="text-sm font-medium text-gray-500">
              {data?.me.email}
            </div>
          </div>
          <button
            type="button"
            className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
          {userNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
