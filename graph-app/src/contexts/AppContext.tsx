import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface OperationType {
  id: number;
  equation: string;
}

export interface AlphabetType {
  id: number;
  letter: string;
}

export interface AppContextInterface {
  alphabet: AlphabetType[];
  setAlphabet: Dispatch<SetStateAction<AlphabetType[]>>;
  word: string[];
  setWord: Dispatch<SetStateAction<string[]>>;
  operations: OperationType[];
  setOperations: Dispatch<SetStateAction<OperationType[]>>;
  showOutput: boolean;
  setShowOutput: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextInterface>({
  alphabet: [],
  setAlphabet: () => {},
  word: [],
  setWord: () => {},
  operations: [],
  setOperations: () => {},
  showOutput: false,
  setShowOutput: () => {},
});
