import { useEffect, useState } from "react";
import { useAllPostsLazyQuery } from "../generated/graphql";
import { Container } from "./Container";
import { CreatePostForm } from "./CreatePostForm";
import PostFeed from "./PostFeed";
import { SkeletonPost } from "./Skeletons/SkeletonPost";

export const Home = () => {
  let [allPosts, { data, error, client }] = useAllPostsLazyQuery({
    pollInterval: 60000,
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      allPosts();
      setLoading(false);
    }, 2000);
    return () => client?.stop();
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
