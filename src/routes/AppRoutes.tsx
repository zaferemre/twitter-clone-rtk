import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../app/Auth/LoginPage/index.tsx";
import PostsPage from "../app/Posts/PostsPage/index.tsx";
import PostDetailPage from "../app/Posts/PostDetailPage/index.tsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
