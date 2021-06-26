import React from "react";
import { Comment as CommentType } from "../generated/graphql";

export const Comment: React.FC<{ comment: Partial<CommentType> }> = ({
  comment,
}) => {
  return (
    <div className="flex mt-3">
      <img
        src={comment.user?.imageUrl}
        className="h-10 rounded-full w-10 mr-2"
        alt=""
      />
      <div className="text-sm bg-gray-200 p-3 rounded">
        <h5 className="text-base text-gray-900 mb-1">
          {comment.user?.username!}
        </h5>
        <p className="text-gray-600">{comment.body}</p>
      </div>
    </div>
  );
};
