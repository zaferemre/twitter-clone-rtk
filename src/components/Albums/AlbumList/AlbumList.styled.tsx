import styled from "styled-components";

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 1.5rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
`;

const Loading = styled.p`
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
`;

const Error = styled.p`
  text-align: center;
  color: red;
  padding: 2rem;
`;
export { Feed, Loading, Error };
