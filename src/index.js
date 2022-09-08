import React from "react";
import ReactDOM from "react-dom";
import Tree from "react-d3-tree";
import { DummyData } from "./DummyData";
import "./styles.css";

const svgSquare = {
  shape: "rect",
  shapeProps: {
    width: 180,
    height: 20,
    x: 0,
    y: -20,
    color: "#ffffff"
  }
};

const test = {
  shape: "rect",
  shapeProps: {
    width: 0,
    height: 0,
    x: -20,
    y: 20,
    stroke: "#2F80ED"
  }
};

const nodeStyle = (
  <svg viewbox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
    <rect
      width="50"
      height="10"
      x="10"
      y="10"
      style="fill: skyblue; stroke: cadetblue; stroke-width: 2;"
    />
  </svg>
);

const treeStyle = {
  nodes: {
    node: {
      circle: <nodeStyle />,
      name: <nodeStyle />,
      attributes: <nodeStyle />
    }
  }
};

class NodeLabel extends React.PureComponent {
  render() {
    const { className, nodeData } = this.props;
    return (
      <div
        className={className}
        style={{
          background: "#E3C4C4",
          height: "70px",
          border: "2px solid #2F80ED",
          textAlign: "center",
          // position: "fixed",
          zIndex: "1000",
          // left: "-10px",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
          padding: "5px 0",
          borderRadius: "5px"
        }}
      >
        {nodeData.name}
        <br></br>Department:
        {nodeData.attributes?.department}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>ORG Chart POC</h1>
      <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
        <Tree
          data={DummyData}
          // nodeSvgShape={svgSquare}
          nodeSvgShape={test}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="vertical"
          translate={{ x: 800, y: 100 }}
          allowForeignObjects={true}
          nodeLabelComponent={{
            render: <NodeLabel className="myLabelComponentInSvg" />,
            foreignObjectWrapper: {
              width: 220,
              height: 200,
              y: -50,
              x: -100
            }
          }}
          initialDepth={25}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
