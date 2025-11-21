import { useEffect, useState } from "react";
import ReactFlow, {
  Background,
  type Node,
  type Edge,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode"; // Import your custom node
import { COLORS } from "./constants";

const nodeTypes = { custom: CustomNode };

const edges = [{ id: "e1-2", source: "1", target: "2" }];

interface GraphProps {
  foataForm: string[][] | undefined;
  adjacencyList: Map<string, Set<string>> | undefined;
  canShowOutput: boolean;
}
const Graph = ({ foataForm, adjacencyList, canShowOutput }: GraphProps) => {
  const [flowNodes, setFlowNodes] = useState<Node[]>([]);
  const [flowEdges, setFlowEdges] = useState<Edge[]>([]);

  useEffect(() => {
    if (!canShowOutput || !foataForm || !adjacencyList) {
      setFlowNodes([]);
      setFlowEdges([]);
      return;
    }

    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];

    foataForm.forEach((level, yIndex) => {
      const yPos = yIndex * 150;

      level.forEach((nodeId, xIndex) => {
        const xPos = xIndex * 200;
        const [letter, id] = nodeId.split("_");

        newNodes.push({
          id: nodeId,
          type: "custom",
          position: { x: xPos, y: yPos },
          data: {
            label: `${letter}`,
            color: `${COLORS[Number(yIndex) % COLORS.length]}`,
          },
        });
      });
    });

    adjacencyList.forEach((targets, sourceId) => {
      targets.forEach((targetId) => {
        newEdges.push({
          id: `e-${sourceId}-${targetId}`,
          source: sourceId,
          target: targetId,
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        });
      });
    });

    setFlowNodes(newNodes);
    setFlowEdges(newEdges);
  }, [canShowOutput, foataForm, adjacencyList]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffffffff",
        borderTop: "5px solid white",
        borderLeft: "5px solid white",
      }}
    >
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        nodeTypes={nodeTypes}
        nodesConnectable={false}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Graph;
