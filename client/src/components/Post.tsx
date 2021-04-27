import { ThumbUpIcon, ChatAltIcon } from "@heroicons/react/solid";
import React from "react";

interface Author {
  name: string;
  imageURL: string;
}

interface IPost {
  author: Author;
  id: string;
  likes: string;
  comments: string;
  date: string;
  title: string;
  body: string;
}

interface PostProps {
  item: IPost;
}
export const Post: React.FC<PostProps> = ({
  item: { author, id, likes, comments, date, title, body },
}) => {
  return (
    <li className="bg-white px-4 py-6 sm:p-6 sm:rounded-lg">
      <article>
        <div>
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={author.imageURL}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">
                <a className="hover:underline">{author.name}</a>
              </p>
              <p className="text-sm text-gray-500">
                <a className="hover:underline">
                  <span>{date}</span>
                </a>
              </p>
            </div>
          </div>
          <h2
            id={"question-title-" + id}
            className="mt-4 text-base font-medium text-gray-900"
          >
            {title}
          </h2>
        </div>
        <div
          className="mt-2 text-sm text-gray-700 space-y-4"
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
        <div className="mt-6 flex justify-between space-x-8">
          <div className="flex space-x-6">
            <span className="inline-flex items-center text-sm">
              <button className="inline-flex space-x-2 text-gray-400 hover:text-indigo-500 focus:outline-none">
                <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {likes}
                </span>
              </button>
            </span>
            <span className="inline-flex items-center text-sm">
              <button className="inline-flex space-x-2 text-gray-400 hover:text-indigo-500 focus:outline-none	">
                <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {comments}
                </span>
              </button>
            </span>
          </div>
        </div>
      </article>
    </li>
  );
};
