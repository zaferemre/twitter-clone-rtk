import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./BackButton.styled.tsx";

const BackButton = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>← Go Back</Button>;
};

export default BackButton;
