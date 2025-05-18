import React from "react";
import { AvatarWrapper, AvatarImage } from "./UserAvatar.styled.tsx";
import { UserDetails } from "../../../types/types.ts";

interface UserAvatarProps {
  user: UserDetails;
  authMethod?: string;
}

const UserAvatar = ({ user, authMethod }: UserAvatarProps) => {
  const avatarSrc =
    authMethod === "firebase" && (user as any)?.photoURL
      ? (user as any).photoURL
      : `https://api.dicebear.com/7.x/thumbs/svg?seed=${
          user?.username ?? user?.name ?? "user"
        }`;

  return (
    <AvatarWrapper>
      <AvatarImage src={avatarSrc} alt={user?.name || "User Avatar"} />
    </AvatarWrapper>
  );
};

export default UserAvatar;
