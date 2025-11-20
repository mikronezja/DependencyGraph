import React from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";

type NodeData = {
  label: string;
};

const circleNodeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  height: 50,
  background: "#42ff7aff",
  color: "white",
  borderRadius: "50%",
  border: "2px solid #871ec3ff",
  fontFamily: "sans-serif",
  fontSize: "14px",
};

function CircleNode({ data }: NodeProps<NodeData>) {
  return (
    <div style={circleNodeStyle}>
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default CircleNode;
