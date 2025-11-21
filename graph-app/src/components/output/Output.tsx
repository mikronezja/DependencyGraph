import { useContext, useEffect, useState } from "react";
import Graph from "./graph/Graph";
import {
  getDependencyArray,
  getFNFForm,
  getGraphOfAWord,
  getIndependencyArray,
} from "../../functions";
import { AppContext } from "../../contexts/AppContext";
import Otherdata from "./otherdata/Otherdata";
import styled from "styled-components";

type DependencyPair = [string, string];

interface OutputProps {
  showOutput: number;
}

const OutputContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Output = ({ showOutput }: OutputProps) => {
  const { operations, alphabet, word } = useContext(AppContext);

  const [dependencyArray, setDependencyArray] = useState<DependencyPair[]>([]);
  const [inDependencyArray, setInDependencyArray] = useState<DependencyPair[]>(
    []
  );
  const [adjacencyList, setAdjacencyList] =
    useState<Map<string, Set<string>>>();
  const [foataForm, setFoataForm] = useState<string[][]>();
  const [canShowOutput, setCanShowOutput] = useState<boolean>(false);

  useEffect(() => {
    if (showOutput == 0) {
      setCanShowOutput(false);
      return;
    }

    const { dependencyArray: newDependencyArray, pairs } = getDependencyArray(
      operations,
      alphabet
    );

    const { nodes, adj } = getGraphOfAWord(word, pairs, alphabet);

    const newInDependencyArray = getIndependencyArray(
      newDependencyArray,
      alphabet
    );

    const newFoataForm = getFNFForm(nodes, adj);

    setDependencyArray(newDependencyArray);
    setInDependencyArray(newInDependencyArray);
    setAdjacencyList(adj);
    setFoataForm(newFoataForm);
    setCanShowOutput(
      dependencyArray.length !== 0 ||
        inDependencyArray.length !== 0 ||
        newFoataForm.length !== 0
    );
  }, [showOutput]);

  return (
    <OutputContainer>
      <Graph
        foataForm={foataForm}
        adjacencyList={adjacencyList}
        canShowOutput={canShowOutput}
      />
      <Otherdata
        dependencyArray={dependencyArray}
        inDependencyArray={inDependencyArray}
        foataForm={foataForm!}
        canShowOutput={canShowOutput}
      />
    </OutputContainer>
  );
};

export default Output;
