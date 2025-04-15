import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  overflow-y: auto;
  height: calc(100vh - 4rem);
`;

export const Heading = styled.h3`
  margin-bottom: 1rem;
  color: white;
`;

export const UserRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  gap: 0.75rem;
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
`;

export const UserName = styled.span`
  color: white;
  flex: 1;
  font-size: 0.95rem;
  font-weight: 500;
`;

export const FollowButton = styled.button<{ followed: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #df0005;
  background-color: ${({ followed }) => (followed ? "#df0005" : "white")};
  color: ${({ followed }) => (followed ? "white" : "#df0005")};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;
