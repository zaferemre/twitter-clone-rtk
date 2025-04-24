import styled from "styled-components";

export const PostDetailWrapper = styled.div`
  margin: 2rem;
  padding: 1rem;
`;
export const MobileBackButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    margin-top: 1rem;
    margin-left: 1rem;
    background: none;
    border: none;
  }
`;
