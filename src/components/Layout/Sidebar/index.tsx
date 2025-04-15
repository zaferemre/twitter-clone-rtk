import React from "react";
import {
  SidebarContainer,
  NavList,
  NavItem,
  UserProfile,
  Logo,
  TopSection,
  BackButtonContainer,
} from "./Sidebar.styled.tsx";

import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks.ts";
import { setActiveSidebarView } from "../../../app/redux/slices/uiSlice.ts";
import BackButton from "../../Buttons/BackButton/index.tsx";

const Sidebar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const authMethod = useAppSelector((state) => state.auth.method);

  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.ui.activeSidebarView);

  const avatarSrc =
    authMethod === "firebase" && user?.photoURL
      ? user.photoURL
      : `https://api.dicebear.com/7.x/thumbs/svg?seed=${
          user?.username ?? user?.name ?? "user"
        }`;

  return (
    <SidebarContainer>
      <TopSection>
        <UserProfile>
          <img src={avatarSrc} alt="User Avatar" />
          <span>{user?.name}</span>
        </UserProfile>
        <BackButtonContainer>
          <BackButton />
        </BackButtonContainer>
      </TopSection>
      <NavList>
        <NavItem
          active={active === "feed"}
          onClick={() => dispatch(setActiveSidebarView("feed"))}
        >
          Feed
        </NavItem>
        <NavItem
          active={active === "liked"}
          onClick={() => dispatch(setActiveSidebarView("liked"))}
        >
          Liked Posts
        </NavItem>
        <NavItem
          active={active === "followings"}
          onClick={() => dispatch(setActiveSidebarView("followings"))}
        >
          Followings
        </NavItem>
      </NavList>

      <Logo src="../assets/Akbank-icon.png" />
    </SidebarContainer>
  );
};

export default Sidebar;
