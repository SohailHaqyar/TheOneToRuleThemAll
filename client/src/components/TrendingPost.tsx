import { ChatAltIcon } from "@heroicons/react/solid";
import React from "react";

interface Post {
  id: string;
  user: {
    name: string;
    imageUrl: string;
  };
  body: string;
  comments: number;
}
interface Props {
  post: Post;
}

function TrendingPost(props: Props) {
  const { post } = props;

  return (
    <li key={post.id} className="flex py-4 space-x-3">
      <div className="flex-shrink-0">
        <img
          className="h-8 w-8 rounded-full"
          src={post.user.imageUrl}
          alt={post.user.name}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-800">{post.body}</p>
        <div className="mt-2 flex">
          <span className="inline-flex items-center text-sm">
            <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
              <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
              <span className="font-medium text-gray-900">
                {post.comments}
              </span>
            </button>
          </span>
        </div>
      </div>
    </li>
  );
}

export default TrendingPost;
