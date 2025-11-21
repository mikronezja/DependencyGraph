import { useContext } from "react";
import { ContainerStyled, ContainerTitle, TextAreaStyled } from "../../Styles";
import ObjectButton from "../utilities/ObjectButton";
import { AppContext } from "../../contexts/AppContext";

const WordDisplay = () => {
  const { word, setWord } = useContext(AppContext);

  return (
    <ContainerStyled backgroundcolor="#82cbffff">
      <ContainerTitle>Your word</ContainerTitle>
      <div>
        <ObjectButton
          backgroundcolor="#50b6ffff"
          bordercolor="#24a4ffff"
          hoverbordercolor="#24a4ffff"
          text="+"
          onClick={() => {
            const newId = word.length > 0 ? word[word.length - 1].id + 1 : 0;

            setWord([...word, { id: newId, letter: "" }]);
          }}
        />
      </div>
      {word.map((value, index) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              color: "white",
            }}
          >
            {index}
            <TextAreaStyled
              hoverbordercolor="#24a4ffff"
              key={index}
              value={value.letter}
              onChange={(e) => {
                const copy = [...word];
                copy[index].letter = e.target.value;
                setWord(copy);
              }}
            />
            <ObjectButton
              backgroundcolor="#50b6ffff"
              bordercolor="#24a4ffff"
              hoverbordercolor="#24a4ffff"
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
