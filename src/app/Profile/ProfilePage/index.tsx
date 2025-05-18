import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserDetailsQuery } from "../../../app/redux/services/profileApi.ts";
import UserProfileBanner from "../../../components/UserDetails/UserProfileBanner/index.tsx";
import { useAppSelector } from "../../../app/redux/hooks.ts";
import DashboardLayout from "../../../components/Layout/DashboardLayout/index.tsx";
import UserPostList from "../../../components/UserDetails/UserPostList/index.tsx";

const ProfilePage = () => {
  const { id } = useParams();
  const firebaseUser = useAppSelector((state) => state.auth.user);
  const authMethod = useAppSelector((state) => state.auth.method);

  // is this a Firebase-auth user?
  const isFirebaseUser = authMethod === "firebase" && firebaseUser?.id === id;

  const { data: apiUser, isLoading } = useGetUserDetailsQuery(Number(id), {
    skip: isFirebaseUser || !id || isNaN(Number(id)),
  });

  const displayUser = isFirebaseUser ? firebaseUser : apiUser;

  if (!displayUser) {
    if (isLoading) return <div>Loading...</div>;
    return <div>User not found.</div>;
  }

  return (
    <DashboardLayout>
      <UserProfileBanner user={displayUser} authMethod={authMethod} />
      {typeof displayUser.id === "number" && (
        <UserPostList userId={displayUser.id} />
      )}
    </DashboardLayout>
  );
};

export default ProfilePage;
