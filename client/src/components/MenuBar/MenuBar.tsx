import { Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { MobileMenu } from "./MobileMenu";
import { SearchBar } from "./Searchbar";
import { UserDropdown } from "./UserDropdown";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const MenuBar = () => {
  return (
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? "fixed inset-0 z-40 overflow-y-auto" : "",
          "bg-white shadow-sm lg:static lg:overflow-y-visible"
        )
      }
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-center xl:grid xl:grid-cols-12">
              <SearchBar />
              <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightGreen-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Popover.Button>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-2">
                <UserDropdown />
              </div>
            </div>
          </div>

          <Popover.Panel
            as="nav"
            className="lg:hidden"
            aria-label="Global"
          >
            <MobileMenu />
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
