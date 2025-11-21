import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import ObjectButton from "../utilities/ObjectButton";
import { ContainerStyled, ContainerTitle, TextAreaStyled } from "../../Styles";

const CalculatorDisplay = () => {
  const { operations, setOperations } = useContext(AppContext);
  return (
    <ContainerStyled backgroundcolor="#FF5E5E">
      <ContainerTitle>Type your equations</ContainerTitle>
      <div>
        <ObjectButton
          backgroundcolor="#ff4141ff"
          bordercolor="#ff2323ff"
          hoverbordercolor="#ff2323ff"
          text="+"
          onClick={() => {
            setOperations([...operations, { letter: "", equation: "" }]);
          }}
        />
      </div>
      {operations.map(({ letter, equation }, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <TextAreaStyled
              hoverbordercolor="#ff2323ff"
              value={letter}
              onChange={(e) => {
                const copy = [...operations];
                copy[index].letter = e.target.value;
                setOperations(copy);
              }}
            />
            <TextAreaStyled
              hoverbordercolor="#ff2323ff"
              value={equation}
              onChange={(e) => {
                const copy = [...operations];
                copy[index].equation = e.target.value;
                setOperations(copy);
              }}
            />
            <ObjectButton
              backgroundcolor="#ff4141ff"
              bordercolor="#ff2323ff"
              hoverbordercolor="#ff2323ff"
              text="X"
              onClick={() => {
                const copy = [...operations];
                copy.splice(index, 1);
                setOperations(copy);
              }}
            />
          </div>
        );
      })}
    </ContainerStyled>
  );
};

export default CalculatorDisplay;
