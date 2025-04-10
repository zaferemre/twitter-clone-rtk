import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 400px;
  background-color: #df0005;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
`;

export const Logo = styled.img`
  margin: 0 auto;
  border-radius: 25%;
  border: 2px solid white;
  height: 20%;

  object-fit: contain;
  background-color: rgb(255, 255, 255);
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavItem = styled.li<{ active?: boolean }>`
  font-weight: bold;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? "#790002" : "transparent")};
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background-color: #450001;
  }
`;

export const UserProfile = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 36px;
    height: 36px;
    border-radius: 25%;
    border: 2px solid white;
    background-color: white;
  }

  span {
    font-size: 0.9rem;
  }
`;
export const TopSection = styled.div`
  position: relative;
`;

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0.5rem;
  z-index: 2;
`;
