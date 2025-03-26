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
const ToggleButton = styled.button`
  background-color: transparent;
  color: #2563eb;
  font-weight: 500;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UserItem = styled.li`
  margin-bottom: 0.5rem;

  button {
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: 100%;
    text-align: left;

    &:hover {
      background-color: #e5e7eb;
    }
  }
`;
export { ToggleButton, UserList, UserItem };
