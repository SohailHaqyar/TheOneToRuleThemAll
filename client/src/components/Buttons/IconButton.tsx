import { ChatAltIcon, ThumbUpIcon } from "@heroicons/react/solid";
import React from "react";

interface Props {
  onClick: () => any;
  icon: "chat" | "like";
  length: number;
}
export const IconButton: React.FC<Props> = ({
  onClick,
  icon,
  length,
}) => {
  return (
    <span className="inline-flex items-center text-sm">
      <button
        onClick={onClick}
        className="inline-flex space-x-2  dark:text-lightGreen-700 text-rose-500 focus:outline-none	"
      >
        {icon === "chat" ? (
          <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
        )}
        <span className="font-medium text-gray-900 dark:text-white">
          {length}
        </span>
      </button>
    </span>
  );
};
