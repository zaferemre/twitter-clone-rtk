import styled from "styled-components";
const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #df0005;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 25%;
  border: 2px solid #df0005;
  margin-right: 0.75rem;
`;

const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #6b0001;
`;

const Body = styled.p`
  color: #555;
  font-size: 0.95rem;
`;

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const LikeButton = styled.button<{ liked: boolean }>`
  background: none;
  border: none;
  color: ${({ liked }) => (liked ? "#ef4444" : "#4b5563")};
  font-weight: 500;
  cursor: pointer;
`;

const AlbumButton = styled.button`
  background: none;
  border: none;
  color: #6b0001;
  cursor: pointer;
`;

export {
  Card,
  Header,
  Avatar,
  AuthorName,
  Title,
  Body,
  Actions,
  LikeButton,
  AlbumButton,
};
