import React from "react";
import { ContainerStyled, ContainerTitle } from "../../Styles";
import ObjectButton from "../utilities/ObjectButton";

const AlphabetDisplay = () => {
  return (
    <ContainerStyled>
      <ContainerTitle>Add words in your alphabet</ContainerTitle>
      <ObjectButton text="+" onClick={undefined} />
    </ContainerStyled>
  );
};

export default AlphabetDisplay;
