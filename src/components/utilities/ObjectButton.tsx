import React from "react";
import styled from "styled-components";

const ObjectButtonStyled = styled.button<{
  bordercolor: string;
  backgroundcolor: string;
  hoverbordercolor: string;
}>`
  border: 1.7px solid ${(props) => props.bordercolor};
  background-color: ${(props) => props.backgroundcolor};
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  padding: 2px 8px;
  transition-duration: 0.4s;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.bordercolor};
    border-color: ${(props) => props.hoverbordercolor};
  }
`;

interface ObjectButtonStyledProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  text: string;
  bordercolor: string;
  backgroundcolor: string;
  hoverbordercolor: string;
}

const ObjectButton = ({
  onClick,
  text,
  bordercolor,
  backgroundcolor,
  hoverbordercolor,
}: ObjectButtonStyledProps) => {
  return (
    <ObjectButtonStyled
      bordercolor={bordercolor}
      backgroundcolor={backgroundcolor}
      hoverbordercolor={hoverbordercolor}
      onClick={onClick}
    >
      {text}
    </ObjectButtonStyled>
  );
};

export default ObjectButton;
