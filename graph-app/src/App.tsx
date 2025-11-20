import { useState } from "react";
import Calculator from "./components/calculator/CalculatorDisplay";
import Alphabet from "./components/alphabet/AlphabetDisplay";
import Word from "./components/word/WordDisplay";
import Graph from "./components/graph/Graph";
import "./index.css";
import { AppStyled, ColumnStyled, ContainerStyled, RowStyled } from "./Styles";
import {
  AppContext,
  type AlphabetType,
  type OperationType,
} from "./contexts/AppContext";
import ClearButton from "./components/utilities/ClearButton";
import OutputButton from "./components/utilities/OutputButton";
import ObjectButton from "./components/utilities/ObjectButton";

function App() {
  const [alphabet, setAlphabet] = useState<AlphabetType[]>([]);
  const [word, setWord] = useState<string[]>([]);
  const [operations, setOperations] = useState<OperationType[]>([]);
  const [showOutput, setShowOutput] = useState<boolean>(false);

  return (
    <AppStyled>
      <AppContext.Provider
        value={{
          alphabet,
          setAlphabet,
          word,
          setWord,
          operations,
          setOperations,
          showOutput,
          setShowOutput,
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "10%",
            minHeight: "30px",
          }}
        >
          Header
        </div>
        <div style={{ flexShrink: "0", height: "80vh" }}>
          <RowStyled>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Calculator />
            </div>
            <ColumnStyled>
              <Alphabet />
              <Word />
            </ColumnStyled>
          </RowStyled>
          <div>
            <ObjectButton
              backgroundColor="#ff478bff"
              borderColor="#ffdde9ff"
              hoverBorderColor="#ff70a2ff"
              onClick={(e) => {
                // compute things
                setShowOutput(true);
              }}
              text="Give output"
            />
            <ObjectButton
              backgroundColor="#ff478bff"
              borderColor="#ffdde9ff"
              hoverBorderColor="#ff70a2ff"
              onClick={(e) => {}}
              text="Clear"
            />
          </div>
        </div>
        {showOutput && (
          <ColumnStyled>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{ width: "100%", borderTop: "5px solid white" }}
              ></div>
              <Graph />
            </div>
          </ColumnStyled>
        )}
      </AppContext.Provider>
    </AppStyled>
  );
}

export default App;
