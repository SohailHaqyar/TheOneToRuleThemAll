import { ThumbUpIcon, ChatAltIcon } from "@heroicons/react/solid";
import React, { useContext, useState } from "react";
import {
  Post as IPost,
  useAddCommentMutation,
  useLikePostMutation,
} from "../generated/graphql";
import moment from "moment";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Comment } from "./Comment";
import { CurrentUser } from "../context/CurrentUserContext";
import { formatDate } from "../helpers/formatDate";
import { Avatar } from "./Avatar";
import { useAuth } from "../context/AuthContext";
import { className, TextInput } from "./TextInput";
import { IconButton } from "./Buttons/IconButton";
interface PostProps {
  item: IPost;
}
export const Post: React.FC<PostProps> = ({ item }) => {
  const { currentUser } = useAuth();

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
    <li className="bg-white px-4 py-6 sm:p-6 sm:rounded dark:bg-dracula-700">
      <article>
        <div>
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <Avatar rounded size="xs" src={post.user.imageUrl} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                <Link
                  to={`/user/${post.user.id}`}
                  className="hover:underline"
                >
                  {post.user.username}
                </Link>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200">
                <span>
                  {moment(formatDate(post.created_at)).fromNow()}
                </span>
              </p>
            </div>
          </div>
          <h2
            id={"question-title-" + post.id}
            className="mt-4 text-base font-medium text-gray-900 dark:text-white"
          >
            {post.title}
          </h2>
        </div>
        <div
          className="mt-2 text-sm text-gray-700 dark:text-white"
          dangerouslySetInnerHTML={{
            __html: post.body,
          }}
        />
        <div className="mt-6 flex   justify-between space-x-8">
          <div className="flex space-x-6">
            <IconButton
              onClick={() => likePost()}
              icon="like"
              length={post.likeCount}
            />

            <IconButton
              onClick={() => {
                setCommentShowing(!commentShowing);
              }}
              icon="chat"
              length={commentsArr.length}
            />
          </div>
        </div>

        <div
          className="mt-4 p-2 transition border-t"
          style={{
            display: !commentShowing ? "none" : "block",
          }}
        >
          <h3 className="mt-4 text-xl dark:text-gray-50">Comments</h3>
          <form
            className="flex justify-center mb-5 mt-5"
            onSubmit={handleSubmit(submitComment)}
          >
            <Avatar
              src={
                currentUser.isAuth ? currentUser.user?.imageUrl! : ""
              }
              rounded
              size="xs"
            />
            <div className="mr-2" />

            <input
              {...register("comment", { maxLength: 120 })}
              placeholder="Write a public comment"
              className={className}
              autoComplete="off"
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
