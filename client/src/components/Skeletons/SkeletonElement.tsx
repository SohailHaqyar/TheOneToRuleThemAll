import React from "react";

interface Props {
  type: "avatar" | "title" | "text" | "thumbnail";
}
export const SkeletonElement: React.FC<Props> = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};
