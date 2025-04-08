import React from "react";
import {
  SidebarContainer,
  NavList,
  NavItem,
  UserProfile,
  Logo,
} from "./Sidebar.styled.tsx";

import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks.ts";
import { setActiveSidebarView } from "../../../app/redux/slices/uiSlice.ts";

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
      <UserProfile>
        <img src={avatarSrc} alt="User Avatar" />
        <span>{user?.name}</span>
      </UserProfile>
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
        <NavItem>Albums</NavItem>
        <NavItem>Calendar</NavItem>
        <NavItem>Documents</NavItem>
        <NavItem>Reports</NavItem>
      </NavList>

      <Logo src="../assets/Akbank-icon.png" />
    </SidebarContainer>
  );
};

export default Sidebar;
