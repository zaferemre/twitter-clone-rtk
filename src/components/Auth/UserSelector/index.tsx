import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../../app/redux/services/authApi.ts";
import { useAppDispatch } from "../../../app/redux/hooks.ts";
import { setUser } from "../../../app/redux/slices/authSlice.ts";
import { User } from "../../../types/types.ts";
import { Wrapper, Title, UserList, UserItem } from "./UserSelector.styled.tsx";

const UserSelector = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (user: User) => {
    dispatch(setUser(user));
    navigate("/posts");
  };

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error loading users.</p>;

  return (
    <Wrapper>
      <Title>Select a user to login</Title>
      <UserList>
        {users?.map((user) => (
          <UserItem key={user.id} onClick={() => handleLogin(user)}>
            {user.name} ({user.username})
          </UserItem>
        ))}
      </UserList>
    </Wrapper>
  );
};

export default UserSelector;
