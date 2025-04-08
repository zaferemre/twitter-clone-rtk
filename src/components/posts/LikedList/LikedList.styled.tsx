import styled from "styled-components";

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
