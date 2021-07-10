import React from "react";

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
  size: Sizes;
  src: string;
  rounded: boolean;
  onClick?: () => any;
}

export const Avatar: React.FC<Props> = ({
  size,
  rounded,
  onClick,
  src,
}) => {
  return (
    <img
      src={src}
      alt=""
      onClick={onClick}
      className={classNames(
        size === "xs"
          ? "h-10 w-10"
          : size === "sm"
          ? "w-20 h-20"
          : size === "md"
          ? "w-24 h-24"
          : size === "lg"
          ? "w-28 h-28"
          : "w-32 h-32",
        "ring-2 ring-offset-1 ring-rose-500 ring-opacity-75 dark:ring-gray-200",
        rounded ? "rounded-full" : ""
      )}
    />
  );
};
