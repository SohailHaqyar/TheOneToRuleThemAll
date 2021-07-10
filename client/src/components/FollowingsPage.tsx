import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { useFollowingsQuery } from "../generated/graphql";
import { Container } from "./Container";
import { UserCard } from "./UserCard";

export const FollowingsPage = () => {
  const {
    currentUser: { user },
  } = useAuth();
  const { data } = useFollowingsQuery({
    variables: { id: user.id },
  });
  return (
    <Container>
      <ul className="">
        {data?.getUserFollowings.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </Container>
  );
};
