import { PlusIcon } from "@heroicons/react/solid";
import React from "react";

interface User {
  handle: string;
  imageUrl: string;
  name: string;
}

interface MiniUserCardProps {
  user: User;
}
export const MiniUserCard: React.FC<MiniUserCardProps> = ({
  user,
}) => {
  return (
    <li
      key={user.handle}
      className="flex items-center py-4 space-x-3"
    >
      <div className="flex-shrink-0">
        <img
          className="h-8 w-8 rounded-full"
          src={user.imageUrl}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">
          <a>{user.name}</a>
        </p>
        <p className="text-sm text-gray-500">
          <a>{"@" + user.handle}</a>
        </p>
      </div>
      <div className="flex-shrink-0">
        <button
          type="button"
          className="inline-flex items-center px-3 py-0.5 rounded-full bg-indigo-50 text-sm font-medium text-indigo-700 hover:bg-indigo-100"
        >
          <PlusIcon
            className="-ml-1 mr-0.5 h-5 w-5 text-indigo-400"
            aria-hidden="true"
          />
          <span>Follow</span>
        </button>
      </div>
    </li>
  );
};
