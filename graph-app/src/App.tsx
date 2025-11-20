import { useState } from "react";
import Calculator from "./components/calculator/CalculatorDisplay";
import Alphabet from "./components/alphabet/AlphabetDisplay";
import Word from "./components/word/WordDisplay";
import Graph from "./components/graph/Graph";
import "./index.css";
import { AppStyled, ColumnStyled, ContainerStyled, RowStyled } from "./Styles";
import { AppContext } from "./contexts/AppContext";
import ClearButton from "./components/utilities/ClearButton";
import OutputButton from "./components/utilities/OutputButton";

interface OperationType {
  id: string;
  equation: string;
}

function App() {
  const [alphabet, setAlphabet] = useState<string[]>([]);
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
          <RowStyled>
            <ClearButton />
            <OutputButton />
          </RowStyled>
        </div>
        {/* {showOutput && (
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
        )} */}
      </AppContext.Provider>
    </AppStyled>
  );
}

export default App;
