import React, { useEffect } from "react";
import { useGetUsersQuery } from "../../../app/redux/services/authApi.ts";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks.ts";
import {
  toggleFollowUser,
  setAllFollows,
} from "../../../app/redux/slices/followSlice.ts";
import {
  Wrapper,
  Heading,
  UserRow,
  FollowButton,
  Avatar,
  UserName,
} from "./FollowingsSideBar.styled.tsx";

const FollowingsSidebar = () => {
  const dispatch = useAppDispatch();
  const { data: users, isLoading } = useGetUsersQuery();
  const followedIds = useAppSelector((state) => state.follow.followedUserIds);
  const initialized = useAppSelector((state) => state.follow.initialized);

  useEffect(() => {
    if (!initialized && users) {
      dispatch(setAllFollows(users.map((u) => Number(u.id))));
    }
  }, [users, initialized, dispatch]);

  if (isLoading || !users) return <Wrapper>Loading users...</Wrapper>;

  return (
    <Wrapper>
      <Heading>Followings</Heading>
      {users.map((user) => {
        const isFollowed = followedIds.includes(Number(user.id));
        const avatarSrc = `https://api.dicebear.com/7.x/thumbs/svg?seed=${
          user?.username ?? user?.name ?? "user"
        }`;

        return (
          <UserRow key={user.id}>
            <Avatar src={avatarSrc} alt={user.name} />
            <UserName>{user.name}</UserName>
            <FollowButton
              followed={isFollowed}
              onClick={() => dispatch(toggleFollowUser(Number(user.id)))}
            >
              {isFollowed ? "Unfollow" : "Follow"}
            </FollowButton>
          </UserRow>
        );
      })}
    </Wrapper>
  );
};

export default FollowingsSidebar;
