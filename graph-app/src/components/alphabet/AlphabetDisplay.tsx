import React, { useContext } from "react";
import { ContainerStyled, ContainerTitle, TextAreaStyled } from "../../Styles";
import ObjectButton from "../utilities/ObjectButton";
import { AppContext } from "../../contexts/AppContext";

const AlphabetDisplay = () => {
  const { alphabet, setAlphabet } = useContext(AppContext);
  return (
    <ContainerStyled shadowColor="#ff478bff" backGroundColor="#ffdde9ff">
      <ContainerTitle>Add letters to your alphabet</ContainerTitle>
      <ObjectButton
        backgroundColor="#ff478bff"
        borderColor="#ffdde9ff"
        hoverBorderColor="#ff70a2ff"
        text="+"
        onClick={() => {
          const newId =
            alphabet.length > 0 ? alphabet[alphabet.length - 1].id + 1 : 0;

          setAlphabet([...alphabet, { id: newId, letter: "" }]);
        }}
      />
      {alphabet.map(({ id, letter }, index) => {
        return (
          <div
            key={id}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <TextAreaStyled
              value={letter}
              onChange={(e) => {
                const copy = [...alphabet];
                copy[index].letter = e.target.value;
                setAlphabet(copy);
              }}
            />
            <ObjectButton
              text="X"
              backgroundColor="#ff478bff"
              borderColor="#ffdde9ff"
              hoverBorderColor="#ff70a2ff"
              onClick={() => {
                const copy = [...alphabet];
                copy.splice(index, 1);
                setAlphabet(copy);
              }}
            />
          </div>
        );
      })}
    </ContainerStyled>
  );
};

export default AlphabetDisplay;
