import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../app/Auth/LoginPage/index.tsx";
import PostsPage from "../app/Posts/PostsPage/index.tsx";
import PostDetailPage from "../app/Posts/PostDetailPage/index.tsx";
import ProtectedRoute from "../utils/ProtectedRoute.tsx";
import DashboardLayout from "../components/Layout/DashboardLayout/index.tsx";
import PostList from "../components/posts/PostList/index.tsx";
import AlbumList from "../components/Albums/AlbumList/index.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route
                path="/posts"
                element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <PostList />
                      <AlbumList />
                    </DashboardLayout>
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
            </Routes>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
