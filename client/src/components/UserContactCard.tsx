import React from "react";
import { useContext } from "react";
import { CurrentUser } from "../context/CurrentUserContext";
import {
  useCreateConversationMutation,
  User,
} from "../generated/graphql";

interface Props {
  user: Partial<User>;
}
export const UserContactCard: React.FC<Props> = ({ user }) => {
  const { user: AuthUser } = useContext(CurrentUser);
  const [createConvo, { error }] = useCreateConversationMutation();

  const createConversation = async () => {
    try {
      const result = await createConvo({
        variables: {
          createConversationInput: {
            userIds: [AuthUser!.id!, user.id!],
            name: `${AuthUser?.username}&${user.username}`,
          },
        },
      });
    } catch (e) {
      console.error(e.message);
    }
  };
  if (error) return <div>{error.message}</div>;
  return (
    <div className="mt-2 p-2 flex justify-between items-center">
      <div className=" flex items-center">
        <img
          src={user.imageUrl}
          alt=""
          className="rounded-full w-16 h-16 mr-4 active-user"
        />
        <h2 className="capitalize">{user.username}</h2>
      </div>
      <button
        className="bg-gray-200 text-black w-20 h-10 uppercase text-sm  font-bold"
        onClick={() => createConversation()}
      >
        talk
      </button>
    </div>
  );
};
