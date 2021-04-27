import React from "react";
import { MiniUserCard } from "./MiniUserCard";

interface Props {
  whoToFollow: any[];
}

function WhoToFollow(props: Props) {
  const { whoToFollow } = props;

  return (
    <section aria-labelledby="who-to-follow-heading">
      <div className="bg-white rounded-lg">
        <div className="p-6">
          <h2
            id="who-to-follow-heading"
            className="text-base font-medium text-gray-900"
          >
            Who to follow
          </h2>
          <div className="mt-6 flow-root">
            <ul className="-my-4 divide-y divide-gray-200">
              {whoToFollow.map((user) => (
                <MiniUserCard
                  user={user}
                  key={Math.random() * 500 + user.name}
                />
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

export default WhoToFollow;
