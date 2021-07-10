import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
// import { CurrentUser } from "../../context/CurrentUserContext";
import { useMeQuery } from "../../generated/graphql";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const UserDropdown = () => {
  const { data, client } = useMeQuery({
    onError: (error) => {
      console.log(error.message);
    },
  });

  let userNavigation = [
    { name: "Your Profile", href: "/profile" },
    { name: "Sign out", href: "/signout" },
  ];

  userNavigation[0].href = `/user/${data?.me.id}`;
  const history = useHistory();
  return (
    <Menu as="div" className="flex-shrink-0 relative ml-5">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightGreen-500">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={data?.me.imageUrl}
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
            >
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => {
                    if (item.name === "Sign out") {
                      return (
                        <button
                          onClick={() => {
                            client.resetStore();
                            client.stop();
                            localStorage.clear();
                            history.push("/signup");
                          }}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "w-full text-left  block py-2 px-4 text-sm text-gray-700"
                          )}
                        >
                          {item.name}
                        </button>
                      );
                    } else {
                      return (
                        <Link
                          to={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block py-2 px-4 text-sm text-gray-700"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    }
                  }}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
