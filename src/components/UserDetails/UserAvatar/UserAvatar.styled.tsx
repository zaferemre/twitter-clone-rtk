import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 3px solid #df0005;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 72px;
    height: 72px;
  }
`;
