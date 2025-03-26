import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebaseAuth.ts";
import { useAppDispatch } from "../../../../app/hooks.ts";
import { setUser, setAuthMethod } from "../../authSlice.ts";
import { SubmitButton } from "./GoogleLoginButton.styled.tsx";

const GoogleLoginButton = () => {
  const dispatch = useAppDispatch();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(
        setUser({
          id: user.uid,
          name: user.displayName ?? "",
          email: user.email ?? "",
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
