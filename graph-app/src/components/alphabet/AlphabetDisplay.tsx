import { useContext } from "react";
import { ContainerStyled, ContainerTitle, TextAreaStyled } from "../../Styles";
import ObjectButton from "../utilities/ObjectButton";
import { AppContext } from "../../contexts/AppContext";

const AlphabetDisplay = () => {
  const { alphabet, setAlphabet } = useContext(AppContext);
  return (
    <ContainerStyled backgroundcolor="#ffd059ff">
      <ContainerTitle>Add letters to your alphabet</ContainerTitle>
      <div>
        <ObjectButton
          backgroundcolor="rgba(255, 193, 35, 1)"
          bordercolor="#ffaf38ff"
          hoverbordercolor="#ffaf38ff"
          text="+"
          onClick={() => {
            const newId =
              alphabet.length > 0 ? alphabet[alphabet.length - 1].id + 1 : 0;

            setAlphabet([...alphabet, { id: newId, letter: "" }]);
          }}
        />
      </div>
      {alphabet.map(({ id, letter }, index) => {
        return (
          <div
            key={id}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <TextAreaStyled
              hoverbordercolor="#ffaf38ff"
              value={letter}
              onChange={(e) => {
                const copy = [...alphabet];
                copy[index].letter = e.target.value;
                setAlphabet(copy);
              }}
            />
            <ObjectButton
              text="X"
              backgroundcolor="rgba(255, 193, 35, 1)"
              bordercolor="#ffaf38ff"
              hoverbordercolor="#ffaf38ff"
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
