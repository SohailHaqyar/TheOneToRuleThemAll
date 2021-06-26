import { ThumbUpIcon, ChatAltIcon } from "@heroicons/react/solid";
import React, { useContext, useState } from "react";
import {
  Post as IPost,
  useAddCommentMutation,
  useLikePostMutation,
} from "../generated/graphql";
import moment from "moment";
import { Link, useHistory } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Comment } from "./Comment";
import { CurrentUser } from "../context/CurrentUserContext";
import { formatDate } from "../helpers/formatDate";
interface PostProps {
  item: IPost;
}
export const Post: React.FC<PostProps> = ({ item }) => {
  const currentUser = useContext(CurrentUser);

  const { register, handleSubmit, reset } =
    useForm<{ comment: string }>();
  const [post, setPost] = useState({
    id: item.id,
    likeCount: item.likes.length,
    comments: item.comments,
    title: item.title,
    body: item.body,
    created_at: item.created_at,
    user: item.user,
  });

  const [like] = useLikePostMutation();
  const [addComment] = useAddCommentMutation();
  const [commentShowing, setCommentShowing] = useState(false);
  const history = useHistory();

  const [commentsArr, setCommentsArr] = useState<any[]>(
    post.comments
  );

  const likePost = async () => {
    const newPost = await like({ variables: { postId: post.id } });
    if (newPost.errors) {
      alert(newPost.errors);
    }
    if (!newPost.errors) {
      setPost({
        ...post,
        likeCount: newPost.data?.likePost.likes.length!,
      });
    }
  };

  const submitComment: SubmitHandler<{ comment: string }> = async (
    data
  ) => {
    const newComment = await addComment({
      variables: { postId: post.id, body: data.comment },
    });
    if (!newComment.errors) {
      let newArr = [newComment.data?.addComment, ...commentsArr];
      setCommentsArr(newArr);
    }

    reset();
  };

  return (
    <li className="bg-white px-4 py-6 sm:p-6 sm:rounded-lg">
      <article>
        <div>
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={post.user.imageUrl}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">
                <Link
                  to={`/user/${post.user.id}`}
                  className="hover:underline"
                >
                  {post.user.username}
                </Link>
              </p>
              <p className="text-sm text-gray-500">
                <span>
                  {moment(formatDate(post.created_at)).fromNow()}
                </span>
              </p>
            </div>
          </div>
          <h2
            id={"question-title-" + post.id}
            className="mt-4 text-base font-medium text-gray-900"
          >
            {post.title}
          </h2>
        </div>
        <div
          className="mt-2 text-sm text-gray-700 space-y-4"
          dangerouslySetInnerHTML={{
            __html: post.body,
          }}
        />
        <div className="mt-6 flex   justify-between space-x-8">
          <div className="flex space-x-6">
            <span className="inline-flex items-center text-sm">
              <button
                onClick={() => likePost()}
                className="inline-flex space-x-2 text-gray-400 hover:text-indigo-500 focus:outline-none"
              >
                <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {post.likeCount}
                </span>
              </button>
            </span>
            <span className="inline-flex items-center text-sm">
              <button
                onClick={() => {
                  // history.push(`/post/${post.id}`);
                  setCommentShowing(!commentShowing);
                }}
                className="inline-flex space-x-2 text-gray-400 hover:text-indigo-500 focus:outline-none	"
              >
                <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {post.comments.length}
                </span>
              </button>
            </span>
          </div>
        </div>

        <div
          className="mt-4 p-2 transition border-t"
          style={{
            display: !commentShowing ? "none" : "block",
          }}
        >
          <h3 className="mt-4 text-xl">Comments</h3>
          <form
            className="flex justify-center mb-5 mt-5"
            onSubmit={handleSubmit(submitComment)}
          >
            <img
              src={
                currentUser.isAuth ? currentUser.user?.imageUrl : ""
              }
              alt="me"
              className="h-10 rounded-full mr-2"
            />
            <input
              {...register("comment")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
              placeholder="Write a public comment"
            />
          </form>

          {commentsArr.map((c) => (
            <Comment key={c.id} comment={c as any} />
          ))}
        </div>
      </article>
    </li>
  );
};
