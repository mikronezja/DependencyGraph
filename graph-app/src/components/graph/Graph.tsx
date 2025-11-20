import React from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import CircleNode from "./CircleNode"; // Import your custom node

const nodeTypes = { circle: CircleNode };

const nodes = [
  {
    id: "1",
    type: "circle",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
  },
  {
    id: "2",
    type: "circle",
    position: { x: 200, y: 100 },
    data: { label: "Node 2" },
  },
];

const edges = [{ id: "e1-2", source: "1", target: "2" }];

const Graph = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#FBEBFF",
        borderTop: "5px solid white",
        borderLeft: "5px solid white",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesConnectable={false}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Graph;
