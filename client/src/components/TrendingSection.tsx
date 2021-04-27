import React from "react";
import TrendingPost from "./TrendingPost";

interface Props {
  trendingPosts: any[];
}

function TrendingSection(props: Props) {
  const { trendingPosts } = props;

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
              {trendingPosts.map((post) => (
                <TrendingPost post={post} />
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingSection;
