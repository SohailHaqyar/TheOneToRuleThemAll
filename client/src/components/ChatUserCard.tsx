import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUser } from "../context/CurrentUserContext";
import { Conversation, User } from "../generated/graphql";

interface Props {
  conversation: Partial<Conversation>;
}
export const ChatUserCard: React.FC<Props> = ({ conversation }) => {
  const { push } = useHistory();
  const { user } = useContext(CurrentUser);

  const getUser = () => {
    let finalUser;
    if (conversation.users !== undefined && user) {
      finalUser = conversation.users.find((u) => u.id !== user.id);
    }
    return finalUser;
  };
  let conversee = getUser();

  return (
    <li
      className="bg-white hover:bg-gray-200 flex items-center my-1 p-2 rounded"
      onClick={() => {
        push(`/chats/${conversee?.id}`);
      }}
    >
      <img
        src={conversee?.imageUrl}
        alt=""
        className="rounded-full w-14 h-14"
      />
      <div className="ml-4">
        <h2 className="capitalize text-sm font-semibold">
          {conversation.name}
        </h2>
        <span className="	text-gray-600 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
    </li>
  );
};
