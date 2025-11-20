import React from "react";
import styled from "styled-components";

const ObjectButtonStyled = styled.button<{
  borderColor: string;
  backgroundColor: string;
  hoverBorderColor: string;
}>`
  border: 1.7px solid ${(props) => props.borderColor}
  background-color:  ${(props) => props.backgroundColor}
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  padding: 2px 8px;
  transition-duration: 0.4s;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.borderColor}
    border-color: ${(props) => props.hoverBorderColor}
  }
`;

interface ObjectButtonStyledProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  text: string;
  borderColor: string;
  backgroundColor: string;
  hoverBorderColor: string;
}

const ObjectButton = ({
  onClick,
  text,
  borderColor,
  backgroundColor,
  hoverBorderColor,
}: ObjectButtonStyledProps) => {
  return (
    <ObjectButtonStyled
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      hoverBorderColor={hoverBorderColor}
      onClick={onClick}
    >
      {text}
    </ObjectButtonStyled>
  );
};

export default ObjectButton;
