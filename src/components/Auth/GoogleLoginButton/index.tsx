import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../../../app/redux/services/firebaseAuth.ts";
import { useAppDispatch } from "../../../app/redux/hooks.ts";
import { setUser, setAuthMethod } from "../../../app/redux/slices/authSlice.ts";
import { SubmitButton } from "./GoogleLoginButton.styled.tsx";

const GoogleLoginButton = () => {
  const dispatch = useAppDispatch();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Firebase user:", user);

      dispatch(
        setUser({
          id: user.uid,
          name: user.displayName ?? "",
          email: user.email ?? "",
          photoURL: user.photoURL ?? "",
          username: user.email?.split("@")[0] ?? user.uid.slice(0, 6),
        })
      );
      dispatch(setAuthMethod("firebase"));
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <SubmitButton onClick={handleGoogleLogin}>Sign in with Google</SubmitButton>
  );
};
export default GoogleLoginButton;
