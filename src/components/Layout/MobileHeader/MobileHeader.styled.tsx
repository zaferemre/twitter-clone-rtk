import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background-color: #df0005;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid white;
`;

export const Logo = styled.img`
  height: 36px;
  object-fit: contain;
  background-color: white;
  border-radius: 25%;
  border: 1px solid white;
`;

export const Hamburger = styled.button`
  font-size: 1.5rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
`;

export const MenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: #df0005;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  z-index: 999;
`;

export const MenuItem = styled.button<{ active?: boolean }>`
  font-size: 1.25rem;
  color: ${({ active }) => (active ? "white" : "#eee")};
  background: none;
  border: none;
  font-weight: bold;
  margin: 1rem 0;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
export const SignOutButton = styled.button`
  color: #ffdddd;
  background-color: #5e0000;
  font-weight: bold;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.25s ease;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
  &:hover {
    background-color: #7a0000;
  }
`;
