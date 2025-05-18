import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../app/Auth/LoginPage/index.tsx";
import PostsPage from "../app/Posts/PostsPage/index.tsx";
import PostDetailPage from "../app/Posts/PostDetailPage/index.tsx";
import ProtectedRoute from "../utils/ProtectedRoute.tsx";
import ProfilePage from "../app/Profile/ProfilePage/index.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/posts"
        element={
          <ProtectedRoute>
            <PostsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/posts/:id"
        element={
          <ProtectedRoute>
            <PostDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/:id"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
