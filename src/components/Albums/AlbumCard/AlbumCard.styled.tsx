import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #df0005;

  @media (max-width: 600px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
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

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #6b0001;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Body = styled.p`
  color: #555;
  font-size: 0.95rem;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

const LikeButton = styled.button<{ liked: boolean }>`
  background: none;
  border: none;
  color: ${({ liked }) => (liked ? "#ef4444" : "#4b5563")};
  font-weight: 500;
  cursor: pointer;
`;

const CommentButton = styled.button`
  background: none;
  border: none;
  color: #6b0001;
  cursor: pointer;
  font-weight: 500;
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
  CommentButton,
  AlbumButton,
};
