import moment from "moment";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { CurrentUser } from "../context/CurrentUserContext";
import {
  useAddCommentMutation,
  useGetPostQuery,
} from "../generated/graphql";
import { formatDate } from "../helpers/formatDate";
import { Container } from "./Container";
import { Post } from "./Post";

export const PostPage = () => {
  const params: { id: string } = useParams();
  const { refetch, data, loading, error } = useGetPostQuery({
    variables: { postId: params.id },
  });

  const [addComment] = useAddCommentMutation();
  const { register, handleSubmit, reset } =
    useForm<{ comment: string }>();

  const submitComment: SubmitHandler<{ comment: string }> = async (
    data
  ) => {
    const newComment = await addComment({
      variables: { postId: post.id, body: data.comment },
    });
    if (!newComment.errors) {
      refetch();
    }

    reset();
  };

  const currentUser = useContext(CurrentUser);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  let post = data?.findOnePost!;
  return (
    <Container>
      <ul>
        <Post item={data?.findOnePost as any} />
      </ul>

      <div className="bg-white px-4 py-6 mt-2">
        <h2>People Who Liked this post</h2>
        <div className="flex mt-2">
          {post.likes.map((like) => (
            <Link
              to={`/user/${like.user.id}`}
              className=""
              key={like.id}
            >
              <img
                src={like.user.imageUrl}
                alt=""
                className="h-14 w-14 rounded-full m-1 transform hover:scale-125 transition"
              />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <form
          className="flex justify-center mb-5 mt-5 bg-white px-4 py-8"
          onSubmit={handleSubmit(submitComment)}
        >
          <img
            src={currentUser.isAuth ? currentUser.user!.imageUrl : ""}
            alt="me"
            className="h-10 rounded-full mr-2"
          />
          <input
            {...register("comment", {
              required: true,
            })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
            placeholder="Write a public comment"
          />
        </form>
      </div>

      <ul>
        {post.comments.map((comment) => (
          <li
            className="bg-white border border-gray-200 px-4 py-6 sm:p-6 sm:rounded-lg mt-2"
            key={comment.id}
          >
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={comment.user.imageUrl}
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  <Link
                    to={`/user/${comment.user.id}`}
                    className="hover:underline"
                  >
                    {comment.user.username}
                  </Link>
                </p>
                <p className="text-sm text-gray-500">
                  <span>
                    {moment(formatDate(comment.created_at)).fromNow()}
                  </span>
                </p>
              </div>
            </div>
            <h2
              id={"question-title-" + comment.id}
              className="mt-4 text-base font-medium text-gray-900"
            >
              {comment.body}
            </h2>
          </li>
        ))}
      </ul>
    </Container>
  );
};
