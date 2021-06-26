import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreatePostMutation } from "../generated/graphql";

type Inputs = {
  title: string;
  description: string;
};

interface Props {
  refetch: Function;
}

export const CreatePostForm: React.FC<Props> = ({ refetch }) => {
  const [createPostMutation, { error }] = useCreatePostMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await createPostMutation({
        variables: {
          createPostInput: {
            title: data.title,
            body: data.description,
          },
        },
      });
      if (error) {
        console.log(error);
      }

      await refetch();
      reset();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full">
      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center mb-3 text-1xl uppercase">
          Create a new Post
        </h2>
        <div className="mb-4">
          <input
            {...register("title", { required: true })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
            placeholder="Title"
          />
          {errors.title && (
            <span className="text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            {...register("description", {
              required: true,
            })}
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
            placeholder="Body"
          />
          {errors.description && (
            <span className="text-red-600">
              This field is required
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-transparent font-semibold hover:bg-indigo-600 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-sm uppercase w-full"
        >
          Post
        </button>
      </form>
    </div>
  );
};
