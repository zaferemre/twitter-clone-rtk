import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage/index.tsx";
import PostsPage from "../features/posts/pages/PostsPage/index.tsx";
import PostDetailPage from "../features/posts/pages/PostDetailPage/index.tsx";
const AppRoutes = () => {
  return (
    <Routes>
      <ProtectedRoute>
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </ProtectedRoute>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
