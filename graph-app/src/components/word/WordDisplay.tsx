import React, { useContext } from "react";
import { ContainerStyled, ContainerTitle, TextAreaStyled } from "../../Styles";
import ObjectButton from "../utilities/ObjectButton";
import { AppContext } from "../../contexts/AppContext";

const WordDisplay = () => {
  const { word, setWord } = useContext(AppContext);

  return (
    <ContainerStyled shadowColor="#FF9B1A" backGroundColor="#ffddb0ff">
      <ContainerTitle>Give a word</ContainerTitle>
      <ObjectButton
        backgroundColor="#ff478bff"
        borderColor="#ffdde9ff"
        hoverBorderColor="#ff70a2ff"
        text="+"
        onClick={() => {
          setWord([...word, ""]);
        }}
      />
      {word.map((value, index) => {
        return (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <TextAreaStyled
              value={value}
              onChange={(e) => {
                const copy = [...word];
                copy[index] = e.target.value;
                setWord(copy);
              }}
            />
            <ObjectButton
              backgroundColor="#ff478bff"
              borderColor="#ffdde9ff"
              hoverBorderColor="#ff70a2ff"
              text="X"
              onClick={() => {
                const copy = [...word];
                copy.splice(index, 1);
                setWord(copy);
              }}
            />
          </div>
        );
      })}
    </ContainerStyled>
  );
};

export default WordDisplay;
