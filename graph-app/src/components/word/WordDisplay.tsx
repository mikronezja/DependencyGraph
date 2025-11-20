import React from "react";
import { ContainerStyled, ContainerTitle } from "../../Styles";
import ObjectButton from "../utilities/ObjectButton";

const WordDisplay = () => {
  return (
    <ContainerStyled>
      <ContainerTitle>Give a word</ContainerTitle>
      <ObjectButton text="+" onClick={undefined} />
    </ContainerStyled>
  );
};

export default WordDisplay;
