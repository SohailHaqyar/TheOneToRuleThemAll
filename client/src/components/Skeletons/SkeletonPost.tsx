import React from "react";
import { Shimmer } from "./Shimmer";
import { SkeletonElement } from "./SkeletonElement";

export const SkeletonPost = () => {
  return (
    <div className="skeleton-wrapper">
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
