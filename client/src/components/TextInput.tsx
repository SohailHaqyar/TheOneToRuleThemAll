import React from "react";

export const className = `rounded  border dark:border-transparent border-gray-200 w-full py-2 px-3 text-gray-900 focus:outline-none h-10 dark:bg-dracula-800 dark:text-white dark:placeholder-white`;
export const TextInput = ({ ...props }) => {
  return (
    <input
      {...props}
      className="rounded  border dark:border-transparent border-gray-200 w-full py-2 px-3 text-gray-900 focus:outline-none h-10 dark:bg-dracula-800 dark:text-white dark:placeholder-white"
    />
  );
};
