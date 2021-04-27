import React from "react";
import { Post } from "./Post";

interface Props {
  data: any[];
}

function PostFeed(props: Props) {
  const { data } = props;

  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <ul className="space-y-4">
        {data.map((item) => (
          <Post item={item} key={item.id} />
        ))}
      </ul>
    </main>
  );
}

export default PostFeed;
