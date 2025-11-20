import React from "react";
import styled from "styled-components";

const ObjectButtonStyled = styled.button`
  border: 1.7px solid #ff80e8;
  background-color: #ffb0f0;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  padding: 2px 8px;
  transition-duration: 0.4s;
  text-decoration: none;

  &:hover {
    background-color: #ff80e8;
    border-color: #ff44ddff;
  }
`;

interface ObjectButtonStyledProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  text: string;
}

const ObjectButton = ({ onClick, text }: ObjectButtonStyledProps) => {
  return <ObjectButtonStyled onClick={onClick}>{text}</ObjectButtonStyled>;
};

export default ObjectButton;
