import React from "react";
import { Link } from "react-router-dom";
import { User } from "../generated/graphql";

interface MiniUserCardProps {
  user: User;
}
export const MiniUserCard: React.FC<MiniUserCardProps> = ({
  user,
}) => {
  return (
    <li key={user.id} className="flex items-center py-4 space-x-3">
      <div className="flex-shrink-0">
        <img
          className="h-8 w-8 rounded-full"
          src={user.imageUrl}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">
          <Link to={`/user/${user.id}`}>{user.username}</Link>
        </p>
        <p className="text-sm text-gray-500">
          <Link to={`/user/${user.id}`}>{user.email}</Link>
        </p>
      </div>
    </li>
  );
};
