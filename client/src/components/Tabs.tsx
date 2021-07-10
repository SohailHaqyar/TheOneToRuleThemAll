import { useState } from "react";
import { FollowerOrFollowings } from "./FollowerOrFollowings";
import { Post } from "./Post";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const Tabs = ({ posts, followers, followings, user }: any) => {
  const [current, setCurrent] = useState("Followers");
  const renderTabs = () => {
    switch (current) {
      case "Posts": {
        return (
          <ul className="space-y-2 h-full">
            {posts.map((post: any) => {
              let item = { ...post, user };
              return <Post key={post.id} item={item as any} />;
            })}
          </ul>
        );
      }

      case "Followers": {
        return <FollowerOrFollowings data={followers} />;
      }

      case "Followings": {
        return <FollowerOrFollowings data={followings} />;
      }
    }
  };
  return (
    <div className="hidden sm:block">
      <nav
        className="relative z-0 rounded-lg mb-2 flex divide-x divide-gray-200 dark:divide-gray-900"
        aria-label="Tabs"
      >
        <div
          onClick={() => setCurrent("Posts")}
          className={classNames(
            current === "Posts"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700",
            "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 dark:bg-dracula-700 dark:text-white"
          )}
        >
          <span>Posts</span>
          <span
            aria-hidden="true"
            className={classNames(
              current === "Posts"
                ? "dark:bg-lightGreen-500 bg-rose-500"
                : "bg-transparent",
              "absolute inset-x-0 bottom-0 h-0.5"
            )}
          />
        </div>

        <div
          onClick={() => setCurrent("Followers")}
          className={classNames(
            current === "Followers"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700",
            "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 dark:bg-dracula-700 dark:text-white dark:border-gray-600"
          )}
        >
          <span>Followers</span>
          <span
            aria-hidden="true"
            className={classNames(
              current === "Followers"
                ? "dark:bg-lightGreen-500 bg-rose-500"
                : "bg-transparent",
              "absolute inset-x-0 bottom-0 h-0.5"
            )}
          />
        </div>
        <div
          onClick={() => setCurrent("Followings")}
          className={classNames(
            current === "Followings"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700",
            "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 dark:bg-dracula-700 dark:text-white dark:border-gray-600"
          )}
        >
          <span>Followings</span>
          <span
            aria-hidden="true"
            className={classNames(
              current === "Followings"
                ? "dark:bg-lightGreen-500 bg-rose-500"
                : "bg-transparent",
              "absolute inset-x-0 bottom-0 h-0.5"
            )}
          />
        </div>
      </nav>
      {renderTabs()}
    </div>
  );
};
