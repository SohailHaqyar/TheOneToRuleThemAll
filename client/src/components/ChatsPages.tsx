import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CurrentUser } from "../context/CurrentUserContext";
import {
  useAllUsersQuery,
  useGetUserConversationsQuery,
  User,
} from "../generated/graphql";
import { ChatBox } from "./ChatBox";
import { ChatUserCard } from "./ChatUserCard";
import { UserContactCard } from "./UserContactCard";

export const ChatsPages = () => {
  const { data: users } = useAllUsersQuery();
  const { data, loading } = useGetUserConversationsQuery();
  const { user } = useContext(CurrentUser);

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="h-full overflow-y-scroll">
          <div className="bg-gray-200 flex items-center p-2">
            <img
              src={user?.imageUrl}
              alt=""
              className="w-16 h-16 mr-2 rounded-full"
            />
            <h2>Conversations</h2>
          </div>
          <ul className="">
            {data?.getUserConvos.map((conversation) => {
              return (
                <ChatUserCard
                  conversation={conversation as any}
                  key={conversation.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <ChatBox />
      <div className="contacts">
        <div className="bg-gray-200 py-3 w-full">
          <h2 className="text-center text-xl font-semibold">
            Your Contacts
          </h2>
        </div>
        <ul>
          {users?.users.map((user) => (
            <UserContactCard key={user.id} user={user as any} />
          ))}
        </ul>
      </div>
    </div>
  );
};
