import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage/index.tsx";
import PostsPage from "../features/posts/pages/PostsPage/index.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  );
};

export default AppRoutes;
