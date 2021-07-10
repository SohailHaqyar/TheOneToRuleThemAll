import { MiniUserCard } from "./MiniUserCard";
import {
  useFollowingsLazyQuery,
  useFollowingsQuery,
} from "../generated/graphql";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CurrentUser } from "../context/CurrentUserContext";
import { SkeletonProfile } from "./Skeletons/SkeletonProfile";
interface Props {
  whoToFollow?: any[];
}

function WhoToFollow(props: Props) {
  const currentUser = useContext(CurrentUser);
  const [loading, setLoading] = useState(true);

  const [getFollowings, { data, error }] = useFollowingsLazyQuery({
    variables: { id: currentUser.user?.id! },
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      getFollowings();
      setLoading(false);
    }, 2000);
  }, [getFollowings]);

  if (error) return <div>Error:{error.message}</div>;

  return (
    <section aria-labelledby="who-to-follow-heading">
      <div className="bg-white rounded-lg">
        <div className="p-6">
          <h2
            id="who-to-follow-heading"
            className="text-base font-medium text-gray-900"
          >
            Users You're Following
          </h2>
          <div className="mt-6 flow-root">
            {loading ? (
              [0, 1].map(() => (
                <SkeletonProfile key={Math.random()} />
              ))
            ) : (
              <ul className="-my-4 divide-y divide-gray-200">
                {data?.getUserFollowings.map((user) => (
                  <MiniUserCard user={user as any} key={user.id} />
                ))}
              </ul>
            )}
          </div>
          <div className="mt-6">
            <Link
              to="/following"
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

export default WhoToFollow;
