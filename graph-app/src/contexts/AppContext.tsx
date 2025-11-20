import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface OperationType {
  id: number;
  equation: string;
}

export interface AppContextInterface {
  alphabet: string[];
  setAlphabet: Dispatch<SetStateAction<string[]>>;
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
