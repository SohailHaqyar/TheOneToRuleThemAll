import React from "react";
import { useParams } from "react-router-dom";
import { Message } from "./Message";

export const ChatBox = () => {
  const param: { id: string } = useParams();
  let id = param.id;

  // GET THE USER
  // GET THE USER's Conversations
  // GET THE USERS
  //

  return (
    <div className="chatBox">
      <div className="chatBoxWrapper">
        <div className="bg-white h-20 w-full px-4 py-2 flex items-center">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="w-14 h-14 rounded-full mr-3"
          />
          <h2 className="text-lg font-bold">Johney Doe & Sohail</h2>
        </div>
        <div className="chatBoxTop">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message isOwner />
          <Message isOwner />
          <Message />
          <Message isOwner />
          <Message isOwner />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <div className="chatBoxBottom">
          <input
            className="chatMessageInput"
            placeholder="Write something.."
          />
        </div>
      </div>
    </div>
  );
};
