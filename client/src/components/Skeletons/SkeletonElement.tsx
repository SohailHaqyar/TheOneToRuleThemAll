import React from "react";

interface Props {
  type: "avatar" | "title" | "text" | "thumbnail";
}
export const SkeletonElement: React.FC<Props> = ({ type }) => {
  const classes = `skeleton ${type} dark:bg-dracula-800 bg-gray-300`;
  return <div className={classes}></div>;
};
