# Project Structure

📦src
┣ 📂app
┃ ┣ 📂Auth
┃ ┃ ┗ 📂LoginPage
┃ ┃ ┃ ┣ 📜LoginPage.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂Posts
┃ ┃ ┣ 📂PostDetailPage
┃ ┃ ┃ ┣ 📜PostDetailPage.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┗ 📂PostsPage
┃ ┃ ┃ ┣ 📜PostsPage.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂Profile
┃ ┃ ┗ 📂ProfilePage
┃ ┃ ┃ ┣ 📜ProfilePage.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┗ 📂redux
┃ ┃ ┣ 📂services
┃ ┃ ┃ ┣ 📜authApi.ts
┃ ┃ ┃ ┣ 📜commentsApi.ts
┃ ┃ ┃ ┣ 📜firebaseAuth.ts
┃ ┃ ┃ ┣ 📜photosApi.ts
┃ ┃ ┃ ┣ 📜postApi.ts
┃ ┃ ┃ ┗ 📜profileApi.ts
┃ ┃ ┣ 📂slices
┃ ┃ ┃ ┣ 📜authSlice.ts
┃ ┃ ┃ ┣ 📜followSlice.ts
┃ ┃ ┃ ┣ 📜photosSlice.ts
┃ ┃ ┃ ┣ 📜postSlice.ts
┃ ┃ ┃ ┗ 📜uiSlice.ts
┃ ┃ ┣ 📜api.ts
┃ ┃ ┣ 📜hooks.ts
┃ ┃ ┗ 📜store.ts
┣ 📂components
┃ ┣ 📂Albums
┃ ┃ ┣ 📂AlbumCard
┃ ┃ ┃ ┣ 📜AlbumCard.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂AlbumDisplay
┃ ┃ ┃ ┣ 📜AlbumDisplay.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┗ 📂AlbumList
┃ ┃ ┃ ┣ 📜AlbumList.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂Auth
┃ ┃ ┣ 📂GoogleLoginButton
┃ ┃ ┃ ┣ 📜GoogleLoginButton.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂JSONUserDropdown
┃ ┃ ┃ ┣ 📜JSONUserDropdown.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂LoginForm
┃ ┃ ┃ ┣ 📜LoginForm.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┗ 📂UserSelector
┃ ┃ ┃ ┣ 📜UserSelector.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂Buttons
┃ ┃ ┗ 📂BackButton
┃ ┃ ┃ ┣ 📜BackButton.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂Layout
┃ ┃ ┣ 📂DashboardLayout
┃ ┃ ┃ ┣ 📜DashboardLayout.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂FollowingsBar
┃ ┃ ┃ ┣ 📜FollowingsBar.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂FollowingsSideBar
┃ ┃ ┃ ┣ 📜FollowingsSideBar.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂LikedPostsBar
┃ ┃ ┃ ┣ 📜LikedPostsBar.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂MobileHeader
┃ ┃ ┃ ┣ 📜MobileHeader.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┗ 📂Sidebar
┃ ┃ ┃ ┣ 📜Sidebar.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┣ 📂UserDetails
┃ ┃ ┣ 📂UserAvatar
┃ ┃ ┃ ┣ 📜UserAvatar.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂UserInfo
┃ ┃ ┃ ┣ 📜UserInfo.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂UserPostList
┃ ┃ ┃ ┣ 📜UserPostList.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┗ 📂UserProfileBanner
┃ ┃ ┃ ┣ 📜UserProfileBanner.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┗ 📂posts
┃ ┃ ┣ 📂CommentList
┃ ┃ ┃ ┣ 📜CommentList.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂LikedList
┃ ┃ ┃ ┣ 📜LikedList.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂PostCard
┃ ┃ ┃ ┣ 📜PostCard.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┗ 📂PostList
┃ ┃ ┃ ┣ 📜PostList.styled.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┣ 📂routes
┃ ┗ 📜AppRoutes.tsx
┣ 📂styles
┃ ┣ 📜GlobalStyles.ts
┃ ┗ 📜theme.ts
┣ 📂types
┃ ┗ 📜types.ts
┣ 📂utils
┃ ┗ 📜ProtectedRoute.tsx
┣ 📜App.css
┣ 📜App.tsx
┣ 📜index.css
┣ 📜index.tsx
┗ 📜setupTests.ts
