import React from "react";
import { User } from "../generated/graphql";
import { Follower } from "./Follower";
interface Followers {
  data: User[] | [];
}
export const FollowerOrFollowings: React.FC<Followers> = ({
  data: followers,
}) => {
  return (
    <div className="rounded px-8 pt-6 pb-8 mb-4 bg-white dark:bg-dracula-700 dark:text-white">
      <ul className="flex flex-wrap">
        {followers &&
          followers.map((f: User) => (
            <Follower
              key={f.id}
              id={f.id}
              imageUrl={f.imageUrl}
              username={f.username}
            />
          ))}
      </ul>
    </div>
  );
};
