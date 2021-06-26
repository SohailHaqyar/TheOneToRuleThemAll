import React, { useContext } from "react";
import { CurrentUser } from "../context/CurrentUserContext";
import { useFollowingsQuery } from "../generated/graphql";
import { Container } from "./Container";
import { UserCard } from "./UserCard";

export const FollowingsPage = () => {
  const currentUser = useContext(CurrentUser);
  const { data } = useFollowingsQuery({
    variables: { id: currentUser.user?.id! },
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
