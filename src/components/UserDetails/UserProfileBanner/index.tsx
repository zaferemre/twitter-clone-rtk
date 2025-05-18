import React from "react";
import { BannerWrapper } from "./UserProfileBanner.styled.tsx";
import UserAvatar from "../UserAvatar/index.tsx";
import UserInfo from "../UserInfo/index.tsx";
import { UserDetails } from "../../../types/types";

interface UserProfileBannerProps {
  user: UserDetails;
  authMethod?: "firebase" | "jsonplaceholder";
}

const UserProfileBanner = ({ user, authMethod }: UserProfileBannerProps) => {
  return (
    <BannerWrapper>
      <UserAvatar user={user} authMethod={authMethod} />
      <UserInfo user={user} />
    </BannerWrapper>
  );
};

export default UserProfileBanner;
