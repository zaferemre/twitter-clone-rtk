import styled from "styled-components";

export const SubmitButton = styled.button`
  background-color: #df0005;
  color: white;
  padding: 0.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
  }
`;
