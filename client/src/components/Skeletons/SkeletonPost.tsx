import React from "react";
import { Shimmer } from "./Shimmer";
import { SkeletonElement } from "./SkeletonElement";

export const SkeletonPost = () => {
  return (
    <div className="skeleton-wrapper dark:bg-dracula-700 bg-gray-200">
      <div className="skeleton-post">
        <div>
          <SkeletonElement type="avatar" />
          <SkeletonElement type="title" />
        </div>
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};
