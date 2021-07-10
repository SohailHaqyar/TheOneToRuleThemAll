import React from "react";
interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  full?: boolean;
  disabled?: boolean | (() => boolean);
}
export const MainButton: React.FC<Props> = ({
  children,
  onClick,
  type,
  full,
  disabled,
}) => {
  return (
    <button
      type={type}
      disabled={disabled as any}
      onClick={onClick}
      style={{ width: full ? "100%" : "", outline: "none" }}
      className="mt-1 dark:disabled:bg-dracula-900  text-rose-500 ring-1 disabled:ring-transparent   dark:ring-lightGreen-700 text-sm lowercase  ring-rose-500 hover:bg-rose-500 dark:hover:bg-lightGreen-700 p-2
      rounded hover:text-white transition-all   dark:text-white"
    >
      {children}
    </button>
  );
};
