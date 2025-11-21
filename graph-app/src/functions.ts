import type {
  AlphabetType,
  OperationType,
  WordType,
} from "./contexts/AppContext";

type DependencyPair = [string, string];

const transitiveReduction = (
  nodes: Set<string>,
  adj: Map<string, Set<string>>
): Map<string, Set<string>> => {
  const reducedAdj = new Map<string, Set<string>>();
  nodes.forEach((node) => {
    reducedAdj.set(node, new Set(adj.get(node) || []));
  });

  for (const u of nodes) {
    for (const v of adj.get(u) || []) {
      const q: string[] = [...(adj.get(v) || [])];
      const visited: Set<string> = new Set(q);

      while (q.length > 0) {
        const current = q.shift()!;
        if (reducedAdj.get(u)?.has(current)) {
          reducedAdj.get(u)!.delete(current);
        }
        for (const neighbor of adj.get(current) || []) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            q.push(neighbor);
          }
        }
      }
    }
  }
  return reducedAdj;
};

export const getDependencyArray = (
  operations: OperationType[],
  alphabet: AlphabetType[]
): { dependencyArray: DependencyPair[]; pairs: Set<string> } => {
  const letters = new Set(alphabet.map(({ letter }) => letter));
  const exprLetters = new Set<string>();
  const dependencyArray: DependencyPair[] = [];

  operations = operations.filter(({ letter, equation }) =>
    alphabet.map(({ id, letter }) => letter).includes(letter)
  );

  const mapLetterToExpression = new Map<string, Set<string>>();

  letters.forEach((letter) => dependencyArray.push([letter, letter]));

  // filling up mapLetterToExpression
  operations.forEach(({ letter, equation }) => {
    const parts = equation.split("=");
    if (parts.length !== 2) return;

    const dependent = parts[0].trim();

    if (!exprLetters.has(dependent)) {
      exprLetters.add(dependent);
    }

    if (!mapLetterToExpression.has(dependent)) {
      mapLetterToExpression.set(dependent, new Set<string>());
    }

    mapLetterToExpression.get(dependent)!.add(letter);
  });

  const existingPairs = new Set<string>();
  dependencyArray.forEach(([letter1, letter2]) => {
    existingPairs.add(`${letter1},${letter2}`);
  });

  operations.forEach(({ letter, equation }) => {
    const parts = equation.split("=");
    if (parts.length !== 2) return;

    const expression = parts[1];

    for (const potencial_letter of exprLetters) {
      const regex = new RegExp(`\\b${potencial_letter}\\b`);

      if (regex.test(expression)) {
        for (const connected of mapLetterToExpression.get(potencial_letter)!) {
          const pairKey = `${letter},${connected}`;
          if (!existingPairs.has(pairKey)) {
            dependencyArray.push([letter, connected]);
            dependencyArray.push([connected, letter]);
            existingPairs.add(pairKey);
            existingPairs.add(`${connected},${letter}`);
          }
        }
      }
    }
  });

  return { dependencyArray: dependencyArray.sort(), pairs: existingPairs };
};

export const getIndependencyArray = (
  dependence_array: DependencyPair[],
  alphabet: AlphabetType[]
): DependencyPair[] => {
  const dependencySet = new Set(dependence_array.map((pair) => pair.join(",")));

  const independencyArray: DependencyPair[] = [];
  const letters = new Set(alphabet.map(({ letter }) => letter));

  for (const letter1 of letters) {
    for (const letter2 of letters) {
      if (letter1 === letter2) {
        continue;
      }

      const pairKey = `${letter1},${letter2}`;
      if (!dependencySet.has(pairKey)) {
        independencyArray.push([letter1, letter2]);
      }
    }
  }

  return independencyArray.sort();
};

export const getGraphOfAWord = (
  word: WordType[],
  existingPairs: Set<string>,
  alphabet: AlphabetType[]
): { nodes: Set<string>; adj: Map<string, Set<string>> } => {
  const nodes = new Set<string>();
  const adj = new Map<string, Set<string>>();

  word = word.filter(({ letter }) =>
    alphabet.map(({ letter }) => letter).includes(letter)
  );

  for (let i = 0; i < word.length; i++) {
    nodes.add(`${word[i].letter}_${i}`);
  }

  for (let i = word.length - 1; i >= 0; i -= 1) {
    const connectedTo = [...existingPairs]
      .filter((pair: string) => pair.startsWith(`${word[i].letter}`))
      .map((pair: string) => pair.split(",")[1]);

    for (let j = i - 1; j >= 0; j -= 1) {
      if (connectedTo.includes(`${word[j].letter}`)) {
        if (!adj.get(`${word[j].letter}_${j}`)) {
          adj.set(`${word[j].letter}_${j}`, new Set<string>());
        }
        adj.get(`${word[j].letter}_${j}`)!.add(`${word[i].letter}_${i}`);
      }
    }
  }
  const reducedAdj = transitiveReduction(nodes, adj);
  return { nodes, adj: reducedAdj };
};

export const getFNFForm = (
  nodes: Set<string>,
  adj: Map<string, Set<string>>
): string[][] => {
  if (nodes.size === 0) {
    return [];
  }

  const inDegree = new Map<string, number>();
  nodes.forEach((node) => inDegree.set(node, 0));

  for (const neighbors of adj.values()) {
    for (const neighbor of neighbors) {
      inDegree.set(neighbor, (inDegree.get(neighbor) || 0) + 1);
    }
  }

  let queue: string[] = [];
  for (const [node, degree] of inDegree.entries()) {
    if (degree === 0) {
      queue.push(node);
    }
  }

  const FNF: string[][] = [];
  while (queue.length > 0) {
    const currentFoataClass = [...queue].sort();
    FNF.push(currentFoataClass);

    const nextQueue: string[] = [];
    for (const node of currentFoataClass) {
      for (const neighbor of adj.get(node) || []) {
        const newDegree = (inDegree.get(neighbor) || 1) - 1;
        inDegree.set(neighbor, newDegree);
        if (newDegree === 0) {
          nextQueue.push(neighbor);
        }
      }
    }
    queue = nextQueue;
  }

  return FNF;
};

export const getNodes = (adj: Map<string, Set<string>>): Set<string> => {
  const nodes = new Set<string>();
  for (const [main_vertex, connected_vertexes] of adj.entries()) {
    if (!nodes.has(main_vertex)) {
      nodes.add(main_vertex);
    }
    for (const vertex of connected_vertexes) {
      if (!nodes.has(vertex)) {
        nodes.add(vertex);
      }
    }
  }
  return nodes;
};
