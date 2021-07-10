import React from "react";
import { Comment as CommentType } from "../generated/graphql";
import { Avatar } from "./Avatar";

export const Comment: React.FC<{ comment: Partial<CommentType> }> = ({
  comment,
}) => {
  return (
    <div className="flex mt-3">
      <Avatar src={comment.user?.imageUrl!} size="xs" rounded />
      <div className="text-sm bg-gray-200 p-3 rounded ml-2 dark:bg-dracula-800 ">
        <h5 className="text-base text-gray-900 mb-1 dark:text-gray-50 ">
          {comment.user?.username!.split(" ")[1]}
        </h5>
        <p className="text-gray-600 dark:text-gray-400">
          {comment.body}
        </p>
      </div>
    </div>
  );
};
