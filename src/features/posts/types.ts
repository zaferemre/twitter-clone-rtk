import { User } from "../auth/types";
export interface Post {
  userId: number | string;
  id: number;
  title: string;
  body: string;
}

export interface Albums {
  userId: number | string;
  id: number;
  title: string;
}

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Props {
  post: Post;
  author: User;
}
