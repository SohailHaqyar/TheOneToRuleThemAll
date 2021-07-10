import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreatePostMutation } from "../generated/graphql";
import { MainButton } from "./Buttons/MainButton";
import { className } from "./TextInput";

type Inputs = {
  title: string;
  description: string;
};

interface Props {
  refetch: Function;
}

let today = new Date();

let checkPostDate = () => {
  const nextPostDate = new Date(
    JSON.parse(localStorage.getItem("nextPostDate")!)
  ).getTime();
  if (!nextPostDate) {
    localStorage.setItem(
      "nextPostDate",
      JSON.stringify(new Date().setDate(today.getDate() + 1))
    );
  }
  if (today.getTime() < nextPostDate) {
    return true;
  } else {
    return false;
  }
};
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
      let today = new Date();
      let tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);

      localStorage.setItem("nextPostDate", JSON.stringify(tomorrow));
      reset();
      await refetch();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full">
      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-4 dark:bg-dracula-700 dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center mb-3 text-1xl uppercase">
          Create a new Post
        </h2>
        <div className="mb-4">
          <input
            {...register("title", { required: true })}
            placeholder="Title"
            className={className}
            autoComplete="off"
          />
          {errors.title && (
            <span className="text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            className={className}
            {...register("description", {
              required: true,
            })}
            placeholder="Body"
            autoComplete="off"
          />
          {errors.description && (
            <span className="text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="flex items-center  justify-center">
          <MainButton type="submit" full disabled={checkPostDate()}>
            Post
          </MainButton>
        </div>
      </form>
    </div>
  );
};
