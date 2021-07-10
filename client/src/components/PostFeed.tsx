import React from "react";
import { Post as PostType } from "../generated/graphql";
import { Post } from "./Post";

interface Props {
  data: PostType[];
}
const PostFeed: React.FC<Props> = ({ data }) => {
  return (
    <ul className="space-y-2">
      {data && data.map((item) => <Post item={item} key={item.id} />)}
    </ul>
  );
};

export default PostFeed;
