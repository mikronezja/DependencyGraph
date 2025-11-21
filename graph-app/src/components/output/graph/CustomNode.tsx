import React from "react";
import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";

type NodeData = {
  label: string;
  color: string;
};

const customNodeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 70,
  height: 40,
  color: "white",
  borderRadius: "10%",
  fontFamily: "sans-serif",
  fontSize: "14px",
};

function CustomNode({ data }: NodeProps<NodeData>) {
  return (
    <div
      style={{ ...customNodeStyle, backgroundColor: data.color }}
      background-color={data.color}
    >
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default CustomNode;
