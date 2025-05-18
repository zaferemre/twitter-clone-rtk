export interface User {
  id: number | string;
  name: string;
  username: string;
  email: string;
  photoURL?: string;
  uid?: string;
}

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

export interface AlbumProps {
  album: Albums;
  author: User;
  photos: Photos[];
}

export interface UserDetails {
  id: string | number;
  name: string;
  username: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
  photoURL?: string;
}
