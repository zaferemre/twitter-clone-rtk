import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const PageLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LeftPane = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightPane = styled.div`
  width: 50%;
`;

const Content = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  background-color: #f9fafb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 400px;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;

  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  color: #374151;
`;

export const Input = styled.input`
  padding: 0.625rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 1rem;
  background-color: #f9fafb;
  color: #111827;

  &:focus {
    border-color: #2563eb;
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

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

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 1rem;

  a {
    color: #df0005;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
