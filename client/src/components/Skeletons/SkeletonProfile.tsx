import React from "react";
import { Shimmer } from "./Shimmer";
import { SkeletonElement } from "./SkeletonElement";

export const SkeletonProfile = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
        </div>
      </div>

      <Shimmer />
    </div>
  );
};
