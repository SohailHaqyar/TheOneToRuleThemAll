import { useEffect, useState } from "react";
import {
  Post as PostType,
  useTrendingPostsLazyQuery,
} from "../generated/graphql";
import { Container } from "./Container";
import { Post } from "./Post";
import { SkeletonPost } from "./Skeletons/SkeletonPost";

export const TrendingPage = () => {
  const [allPosts, { data }] = useTrendingPostsLazyQuery({
    pollInterval: 18000,
    fetchPolicy: "network-only",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      allPosts();
      setLoading(false);
    }, 2000);
  }, [allPosts]);

  return (
    <Container>
      {loading ? (
        [1, 2, 3, 4, 5].map((e) => <SkeletonPost key={e} />)
      ) : (
        <ul className="space-y-4 w-full h-full">
          {data?.findAllTrendingPosts?.map((post) => {
            return <Post key={post.id} item={post as PostType} />;
          })}
        </ul>
      )}
    </Container>
  );
};
