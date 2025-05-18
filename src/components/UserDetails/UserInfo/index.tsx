import React from "react";
import {
  InfoWrapper,
  Name,
  Email,
  Phone,
  Company,
  Website,
} from "./UserInfo.styled.tsx";
import { UserDetails } from "../../../types/types.ts";

const UserInfo = ({ user }: { user?: UserDetails }) => {
  if (!user) return <InfoWrapper>No user data available</InfoWrapper>;

  return (
    <InfoWrapper>
      <Name>{user.name || "Unnamed User"}</Name>
      <Email>{user.email || "No email available"}</Email>
      <Phone>{user.phone || "No phone number"}</Phone>
      <Company>{user.company?.name || "No company info"}</Company>
      <Website>
        {user.website ? (
          <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
            {user.website}
          </a>
        ) : (
          "No website"
        )}
      </Website>
    </InfoWrapper>
  );
};

export default UserInfo;
