import React from "react";
import { Link } from "react-router-dom";
import { useTrendingPostsQuery } from "../generated/graphql";
import TrendingPost from "./TrendingPost";

function TrendingSection() {
  const { data, loading } = useTrendingPostsQuery();
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section aria-labelledby="trending-heading">
      <div className="bg-white rounded-lg">
        <div className="p-6">
          <h2
            id="trending-heading"
            className="text-base font-medium text-gray-900"
          >
            Trending
          </h2>
          <div className="mt-6 flow-root">
            <ul className="-my-4 divide-y divide-gray-200">
              {data?.findAllTrendingPosts?.map((post, index) => {
                if (!(index > 3)) {
                  return (
                    <TrendingPost key={post.id} post={post as any} />
                  );
                }
              })}
            </ul>
          </div>
          <div className="mt-6">
            <Link
              to="/trending"
              className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingSection;
