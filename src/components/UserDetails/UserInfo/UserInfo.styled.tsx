import styled from "styled-components";

export const InfoWrapper = styled.div`
  text-align: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Name = styled.h2`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: #222;
`;

export const Email = styled.p`
  color: #555;
  font-size: 0.95rem;
`;

export const Phone = styled.p`
  color: #555;
  font-size: 0.95rem;
`;

export const Company = styled.p`
  color: #333;
  font-weight: bold;
`;

export const Website = styled.p`
  color: #0070f3;
  font-size: 0.9rem;
  word-break: break-word;
`;
