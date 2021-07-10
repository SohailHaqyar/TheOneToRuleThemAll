import React from "react";
import { useHistory } from "react-router-dom";
import { User } from "../generated/graphql";
import { Avatar } from "./Avatar";
import { MainButton } from "./Buttons/MainButton";
interface Props {
  user: Partial<User>;
}
export const UserCard: React.FC<Props> = ({ user }) => {
  const history = useHistory();
  return (
    <li className="bg-white rounded mb-1 mr-2 flex h-32 dark:bg-dracula-700 dark:text-white">
      <div className=" w-1/5 grid place-items-center imageHoverEffect">
        <Avatar
          src={user.imageUrl!}
          size="sm"
          rounded
          onClick={() => {
            history.push(`/user/${user.id}`);
          }}
        />
      </div>
      <div className="px-8 pt-4 pb-6 flex-grow">
        <h2 className="mt-2 text-xl  font-light capitalize">
          {user.username}
        </h2>
        <h4 className="my-1 text-gray-600 text-sm dark:text-gray-200">
          {user.email}
        </h4>
        <MainButton
          onClick={() => {
            history.push(`/user/${user.id}`);
          }}
        >
          View Profile
        </MainButton>
      </div>
    </li>
  );
};
