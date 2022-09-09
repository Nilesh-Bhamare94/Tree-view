import { Button } from "antd";
import React, { useState } from "react";
import TreeView from "./TreeView";
import 'antd/dist/antd.css';

function App() {
  const [oriantation, setOriantation] = useState("horizontal");
//   const [pathFunc, setPathFun] = useState("diagonal");

  return (
    <div className="App">
      <Button
        onClick={() =>
          setOriantation(
            oriantation === "vertical" ? "horizontal" : "vertical"
          )
        }
      >
        {oriantation}
      </Button>
      {/* <button
        onClick={() =>
          setPathFun(pathFunc === "diagonal" ? "step" : "diagonal")
        }
      >
        {pathFunc}
      </button> */}
      <TreeView oriantation={oriantation}/>
    </div>
  );
}

export default App;