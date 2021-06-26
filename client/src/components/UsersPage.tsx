import React from "react";
import { useAllUsersQuery } from "../generated/graphql";
import { Container } from "./Container";
import { UserCard } from "./UserCard";

export const UsersPage = () => {
  const { data, error } = useAllUsersQuery();
  if (error) return <div>Loading...</div>;
  return (
    <Container>
      <ul className="">
        {data?.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </Container>
  );
};
