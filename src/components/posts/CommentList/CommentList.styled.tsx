import styled from "styled-components";

export const Wrapper = styled.div``;

export const CommentContainer = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;

  img {
    width: 36px;
    height: 36px;
    border-radius: 9999px;
  }

  span {
    font-weight: 500;
  }
`;

export const Body = styled.p`
  font-size: 1rem;
  color: #444;
`;

export const CommentsSection = styled.div`
  margin-top: 2rem;
`;

export const Comment = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const CommentAuthor = styled.h4`
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
  font-weight: 600;
`;

export const CommentEmail = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #888;
`;

export const CommentBody = styled.p`
  font-size: 0.95rem;
  margin-top: 0.5rem;
  color: #555;
`;
