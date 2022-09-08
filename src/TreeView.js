import React from "react";
import { useState } from "react";
import Tree from "react-d3-tree";
import { DummyData } from "./DummyData";
import "./styles.css";
import { Input, Button } from "antd";

// const svgSquare = {
//   shape: "rect",
//   shapeProps: {
//     width: 180,
//     height: 20,
//     x: 0,
//     y: -20,
//     color: "#ffffff"
//   }
// };

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

// const nodeStyle = (
//   <svg viewbox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
//     <rect
//       width="50"
//       height="10"
//       x="10"
//       y="10"
//       style="fill: skyblue; stroke: cadetblue; stroke-width: 2;"
//     />
//   </svg>
// );

// const treeStyle = {
//   nodes: {
//     node: {
//       circle: <nodeStyle />,
//       name: <nodeStyle />,
//       attributes: <nodeStyle />
//     }
//   }
// };


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

export default function TreeView(props) {
  const [orgChart, setOrgChart] = useState(DummyData);
  // const [initialDepths, setIntialDepth] = useState(3);
  const [searchName, setSerchName] = useState("");
  
  const handleChangeForSerch = (e) => {
    setSerchName(e.target.value);
    // setIntialDepth(10);
  };
  
  const Handlesearch = () => {
    function filter(array, name) {
      const getNodes = (result, object) => {
        if (object.name.includes(name)) {
          result.push(object)
          // setIntialDepth(object?.__rd3t?.depth||object?.depth)
          return result;
        }
    
        if (Array.isArray(object.children)) {
          const children = object.children.reduce(getNodes, []);
          // console.log('nodes', nodes)
          console.log('object', object)
          if (children.length) result.push({ ...object, children });
        }
    
        return result;
      };
      if(!getNodes)
      {
        return array
      }
      return array.reduce(getNodes, []);
    }

  console.log(filter(orgChart, 'foo'));
  setOrgChart(filter(orgChart, searchName)===undefined?orgChart:filter(orgChart,searchName))
 // searchName == "" ? window.alert("Enter search query"): setOrgChart(xyz);
};
    
  return (
    <div className="App">
      <h1>VMSB OKR Tree Chart</h1>
      <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
      <Button
        onClick={() => {
          setOrgChart(DummyData);
          // setIntialDepth(0);
          setSerchName("");
        }}
      >
        ResetData
      </Button>
      <Input
        placeholder="serch name"
        onChange={handleChangeForSerch}
        value={searchName}
        style={{ width: "200px" }}
      />{" "}
      <Button type="link" onClick={() => Handlesearch()}>Search</Button>
        <Tree
          data={orgChart}
          // nodeSvgShape={svgSquare}
          nodeSvgShape={test}
          pathFunc="elbow"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation={"vertical"}
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
          initialDepth={9}
        />
      </div>
    </div>
  );
}

