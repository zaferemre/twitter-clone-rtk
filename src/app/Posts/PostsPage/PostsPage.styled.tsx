import styled from "styled-components";

export const MobileTabs = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-top: -4rem;
    width: 100%;
    justify-content: space-around;
    border-bottom: 1px solid #e5e7eb;

    position: fixed;
    background: white;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border: none;
  background: none;
  padding: 0.75rem 0;
  color: ${({ active }) => (active ? "#6b0001" : "#4b5563")};
  border-bottom: ${({ active }) =>
    active ? "3px solid #df0005" : "3px solid transparent"};

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #6b0001;
  }
`;

export const MobileOnly = styled.div`
  display: none;

  @media (max-width: 768px) {
    margin-top: 4rem;
    display: block;
  }
`;

export const DesktopOnly = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
