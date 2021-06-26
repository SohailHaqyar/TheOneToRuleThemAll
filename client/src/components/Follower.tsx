import { useHistory } from "react-router-dom";

interface FollowerProps {
  imageUrl: string;
  id: string;
  username: string;
}

export const Follower: React.FC<FollowerProps> = ({
  imageUrl,
  username,
  id,
}) => {
  const { push } = useHistory();
  return (
    <li
      className="imageHoverEffect mr-1 rounded p-2 flex flex-col items-center"
      onClick={() => {
        push(`/user/${id}`);
      }}
    >
      <img src={imageUrl} alt="" className="w-20 " />
      <h2 className="mt-3 capitalize text-sm">{username}</h2>
      {/* 
      <button className="mt-3 font-bold text-sm uppercase hover:text-indigo-600">
        Follow
      </button> */}
    </li>
  );
};
