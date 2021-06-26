import { ChatAltIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import { Post } from "../generated/graphql";
interface Props {
  post: Post;
}

function TrendingPost(props: Props) {
  const { post } = props;
  const history = useHistory();

  return (
    <li className="flex py-4 space-x-3">
      <div className="flex-shrink-0">
        <img
          className="h-8 w-8 rounded-full"
          src={post.user.imageUrl}
          alt={post.user.username}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-700">{post.title}</p>
        <div className="mt-2 flex">
          <span className="inline-flex items-center text-sm">
            <button
              onClick={() => {
                history.push(`/post/${post.id}`);
              }}
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
              <span className="font-medium text-gray-900">
                {post.comments.length}
              </span>
            </button>
          </span>
        </div>
      </div>
    </li>
  );
}

export default TrendingPost;
