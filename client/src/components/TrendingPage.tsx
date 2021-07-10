import { useEffect, useState } from "react";
import {
  Post as PostType,
  useTrendingPostsLazyQuery,
} from "../generated/graphql";
import { Container } from "./Container";
import { Post } from "./Post";
import { SkeletonPost } from "./Skeletons/SkeletonPost";

export const TrendingPage = () => {
  const [allPosts, { data, loading }] = useTrendingPostsLazyQuery({
    pollInterval: 38000,
  });

  useEffect(() => {
    allPosts();
  }, [allPosts]);

  return (
    <Container>
      {loading ? (
        [1, 2, 3, 4, 5].map((e) => <SkeletonPost key={e} />)
      ) : (
        <ul className="space-y-4 w-full ">
          {data?.findAllTrendingPosts?.map((post) => {
            return <Post key={post.id} item={post as PostType} />;
          })}
        </ul>
      )}
    </Container>
  );
};
