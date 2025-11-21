import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface OperationType {
  letter: string;
  equation: string;
}

export interface AlphabetType {
  id: number;
  letter: string;
}

export interface WordType {
  id: number;
  letter: string;
}

export interface AppContextInterface {
  alphabet: AlphabetType[];
  setAlphabet: Dispatch<SetStateAction<AlphabetType[]>>;
  word: WordType[];
  setWord: Dispatch<SetStateAction<WordType[]>>;
  operations: OperationType[];
  setOperations: Dispatch<SetStateAction<OperationType[]>>;
  showOutput: number;
  setShowOutput: Dispatch<SetStateAction<number>>;
}

export const AppContext = createContext<AppContextInterface>({
  alphabet: [],
  setAlphabet: () => {},
  word: [],
  setWord: () => {},
  operations: [],
  setOperations: () => {},
  showOutput: 0,
  setShowOutput: () => {},
});
