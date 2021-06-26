import { useEffect, useState } from "react";
import { useAllPostsLazyQuery } from "../generated/graphql";
import { Container } from "./Container";
import { CreatePostForm } from "./CreatePostForm";
import PostFeed from "./PostFeed";
import { SkeletonPost } from "./Skeletons/SkeletonPost";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  let [allPosts, { data, error }] = useAllPostsLazyQuery({
    fetchPolicy: "network-only",
    pollInterval: 60000,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      allPosts();
      setLoading(false);
    }, 2000);
  }, [allPosts]);

  if (error) console.log(error);
  return (
    <Container>
      <CreatePostForm refetch={allPosts} />
      {loading ? (
        [1, 2, 3, 4, 5].map((e) => <SkeletonPost key={e} />)
      ) : (
        <PostFeed data={data?.findAll as any} />
      )}
    </Container>
  );
};
