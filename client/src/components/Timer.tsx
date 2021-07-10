import React from "react";

interface Props {
  value: string;
  type: "Seconds" | "Minutes" | "Hours" | "Days";
}

export const Timer = ({ value, type }: Props) => {
  return (
    <h2 className="mb-2 hover:bg-lightGreen-700 hover:text-white bg-gray-200 text-center rounded p-2 dark:text-gray-200 dark:bg-dracula-600 dark:hover:bg-lightGreen-900">
      {value + " "}
      {type}
    </h2>
  );
};
