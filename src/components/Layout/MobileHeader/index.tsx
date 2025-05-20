import React, { useState } from "react";
import {
  HeaderContainer,
  Avatar,
  Logo,
  Hamburger,
  MenuOverlay,
  MenuItem,
  SignOutButton,
} from "./MobileHeader.styled.tsx";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks.ts";
import { setActiveSidebarView } from "../../../app/redux/slices/uiSlice.ts";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.ui.activeSidebarView);
  const user = useAppSelector((state) => state.auth.user);
  const authMethod = useAppSelector((state) => state.auth.method);

  const avatarSrc =
    authMethod === "firebase" && user?.photoURL
      ? user.photoURL
      : `https://api.dicebear.com/7.x/thumbs/svg?seed=${
          user?.username ?? user?.name ?? "user"
        }`;

  const handleSelect = (view: "feed" | "liked" | "followings") => {
    dispatch(setActiveSidebarView(view));
    setOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Avatar src={avatarSrc} alt="User Avatar" />
        <Logo src="../assets/Akbank-icon.png" alt="Logo" />
        <Hamburger onClick={() => setOpen(!open)}>☰</Hamburger>
      </HeaderContainer>

      {open && (
        <MenuOverlay>
          <MenuItem
            active={active === "feed"}
            onClick={() => handleSelect("feed")}
          >
            Feed
          </MenuItem>
          <MenuItem
            active={active === "liked"}
            onClick={() => handleSelect("liked")}
          >
            Liked Posts
          </MenuItem>
          <MenuItem
            active={active === "followings"}
            onClick={() => handleSelect("followings")}
          >
            Followings
          </MenuItem>
          <MenuItem>
            <Link
              to={`/profile/${user?.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              My Profile
            </Link>
          </MenuItem>
          <SignOutButton as="a" href="/login">
            Sign Out
          </SignOutButton>
        </MenuOverlay>
      )}
    </>
  );
};

export default MobileHeader;
