import React from "react";
import { useHistory } from "react-router-dom";
import { User } from "../generated/graphql";
interface Props {
  user: Partial<User>;
}
export const UserCard: React.FC<Props> = ({ user }) => {
  const history = useHistory();
  return (
    <li className="bg-white rounded-xl mb-4 mr-2 flex h-32">
      <div className=" w-1/5 grid place-items-center imageHoverEffect">
        <img
          src={user.imageUrl}
          alt=""
          className="rounded-full w-20 h-20"
          onClick={() => {
            history.push(`/user/${user.id}`);
          }}
        />
      </div>
      <div className="px-8 pt-4 pb-6 flex-grow">
        <h2 className="mt-2 text-xl  font-light capitalize">
          {user.username}
        </h2>
        <h4 className="mt-1 text-gray-600 text-sm">{user.email}</h4>
        <button
          className="mt-3 text-sm uppercase  font-sans hover:text-indigo-700 hover:underline transition-all"
          onClick={() => {
            history.push(`/user/${user.id}`);
          }}
        >
          View Profile
        </button>
      </div>
    </li>
  );
};
