import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CurrentUser } from "../context/CurrentUserContext";
import {
  useFollowersQuery,
  useFollowingsQuery,
  useFollowUserMutation,
  useGetUserQuery,
} from "../generated/graphql";
import { Container } from "./Container";
import { Tabs } from "./Tabs";

export const UserDetails = () => {
  const params: any = useParams();
  const { data } = useGetUserQuery({
    variables: { userId: params.id },
  });
  const [followUser, { error }] = useFollowUserMutation();
  const [isFollowing, setIsFollowing] = useState(false);

  const {
    data: followers,
    refetch,
    loading: followersLoading,
  } = useFollowersQuery({
    variables: { id: params.id },
  });

  const {
    data: followings,
    refetch: followingsRefetch,
    loading: followingsLoading,
  } = useFollowingsQuery({
    variables: { id: params.id },
  });
  console.log(followings);
  const { user } = useContext(CurrentUser);
  let isProfilePage = params.id === user?.id;

  useEffect(() => {
    // followers?.getUserFollowers.map((f) => {
    // });
    if (!followersLoading) {
      for (const f of followers?.getUserFollowers!) {
        if (f.id === user?.id) {
          setIsFollowing(true);
        }
      }
    }
  }, [followers, user?.id, followersLoading]);
  const follow = async () => {
    const result = await followUser({
      variables: {
        id: params.id,
      },
    });
    if (!error) {
      setIsFollowing(!!result.data?.followUser.followResults);
      refetch();
    }
    // console.log(result.data);
    // No Error
  };
  return (
    <Container>
      <div className="w-full">
        <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <img
            src={data?.user.imageUrl}
            alt=""
            className="rounded-full w-32 h-32"
          />
          <h2 className="mt-2 text-lg capitalize">
            {data?.user.username}
          </h2>
          <h3 className="text-base text-gray-600">
            {data?.user.email}
          </h3>
          <h4 className="text-indigo-600">
            {followers?.getUserFollowers.length} Followers
          </h4>

          {!isProfilePage && (
            <button
              className="mt-3 font-semibold hover:bg-indigo-600 disabled:opacity-20 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-sm uppercase"
              onClick={follow}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
        <Tabs
          followers={followers?.getUserFollowers}
          followings={followings?.getUserFollowings}
          user={data?.user}
          posts={data?.user.posts}
        />
      </div>
    </Container>
  );
};
