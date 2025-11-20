import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import ObjectButton from "../utilities/ObjectButton";
import { ContainerStyled, ContainerTitle, TextAreaStyled } from "../../Styles";

const CalculatorDisplay = () => {
  const { operations, setOperations } = useContext(AppContext);

  console.log({ operations });
  return (
    <ContainerStyled
      inputHeight="200px"
      shadowColor="#5EB6FF"
      backGroundColor="#b0dcffff"
    >
      <ContainerTitle>Type your equations</ContainerTitle>
      <div>
        <ObjectButton
          backgroundColor="#ff478bff"
          borderColor="#ffdde9ff"
          hoverBorderColor="#ff70a2ff"
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
      {operations.map(({ id, equation }, index) => {
        return (
          <div
            key={id}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <TextAreaStyled
              value={equation}
              onChange={(e) => {
                const copy = [...operations];
                copy[index].equation = e.target.value;
                setOperations(copy);
              }}
            />
            <ObjectButton
              backgroundColor="#ff478bff"
              borderColor="#ffdde9ff"
              hoverBorderColor="#ff70a2ff"
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
