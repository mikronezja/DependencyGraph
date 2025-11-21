import { useState } from "react";
import Calculator from "./components/calculator/CalculatorDisplay";
import Alphabet from "./components/alphabet/AlphabetDisplay";
import Word from "./components/word/WordDisplay";
import "./index.css";
import { AppStyled, ColumnStyled, RowStyled } from "./Styles";
import {
  AppContext,
  type AlphabetType,
  type OperationType,
  type WordType,
} from "./contexts/AppContext";
import ObjectButton from "./components/utilities/ObjectButton";
import Output from "./components/output/Output";
import "react-resizable/css/styles.css";
import { ResizableBox } from "react-resizable";
import styled from "styled-components";

const ResizableInputStyled = styled(ResizableBox)`
  height: 100%;
  border-right: 6px solid #ecececff;
  background: #ffffffff;
  display: flex;
  flex-direction: column;
`;

const HeaderStyled = styled.div`
  width: 100%;
  background-color: white;
  height: 10%;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainerStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 20px;
`;

function App() {
  const [alphabet, setAlphabet] = useState<AlphabetType[]>([]);
  const [word, setWord] = useState<WordType[]>([]);
  const [operations, setOperations] = useState<OperationType[]>([]);
  const [showOutput, setShowOutput] = useState<number>(0);

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
        <HeaderStyled>
          <div style={{ marginLeft: "20px", fontSize: "20px" }}>
            {`>`} Dependencies
          </div>
          <ButtonContainerStyled>
            <ObjectButton
              backgroundcolor="#00d25bff"
              bordercolor="#00af4cff"
              hoverbordercolor="#00af4cff"
              onClick={() => {
                setShowOutput(showOutput + 1);
              }}
              text="Give output"
            />
            <ObjectButton
              backgroundcolor="#a9a9a9ff"
              bordercolor="#8c8c8cff"
              hoverbordercolor="#8c8c8cff"
              onClick={() => {
                setShowOutput(0);
                setAlphabet([]);
                setOperations([]);
                setWord([]);
              }}
              text="Clear"
            />
          </ButtonContainerStyled>
        </HeaderStyled>
        <RowStyled>
          <ResizableInputStyled
            className="custom-box box"
            width={400}
            height={Infinity}
            axis="x"
            minConstraints={[370, Infinity]}
            maxConstraints={[1000, Infinity]}
            resizeHandles={["e"]}
          >
            <Calculator />
            <Alphabet />
            <Word />
          </ResizableInputStyled>
          <ColumnStyled>
            <Output showOutput={showOutput} />
          </ColumnStyled>
        </RowStyled>
      </AppContext.Provider>
    </AppStyled>
  );
}

export default App;
