import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import ObjectButton from "../utilities/ObjectButton";
import { ContainerStyled, ContainerTitle, TextAreaStyled } from "../../Styles";

const CalculatorDisplay = () => {
  // map -> strings
  const { operations, setOperations } = useContext(AppContext);

  return (
    <ContainerStyled inputHeight="200px">
      <ContainerTitle>Type your equations</ContainerTitle>
      <div>
        <ObjectButton
          text="+"
          onClick={() => {
            const newId =
              operations.length > 0
                ? operations[operations.length - 1].id + 1
                : 0;

            setOperations([...operations, { id: newId, equation: "" }]);
          }}
        />
      </div>
      {operations.map(({ id, equation }) => {
        return (
          <TextAreaStyled
            key={id}
            onChange={(e) => {
              const copy = [...operations];
              copy[id].equation = e.target.value;
              setOperations(copy);
            }}
          />
        );
      })}
    </ContainerStyled>
  );
};

export default CalculatorDisplay;
