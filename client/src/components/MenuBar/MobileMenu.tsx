import {
  HomeIcon,
  FireIcon,
  UserGroupIcon,
  TrendingUpIcon,
  BellIcon,
} from "@heroicons/react/solid";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

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

export const MobileMenu = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-100 text-gray-900"
                : "hover:bg-gray-50",
              "block rounded-md py-2 px-3 text-base font-medium"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4 pb-3">
        <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={user.imageUrl}
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">
              {user.name}
            </div>
            <div className="text-sm font-medium text-gray-500">
              {user.email}
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
            <a
              key={item.name}
              href={item.href}
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
