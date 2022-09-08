import React, { useState } from "react";
import TreeView from "./TreeView";

function App() {
  const [oriantation, setOriantastion] = useState("horizontal");
//   const [pathFunc, setPathFun] = useState("diagonal");

  return (
    <div className="App">
      <button
        onClick={() =>
          setOriantastion(
            oriantation === "vertical" ? "horizontal" : "vertical"
          )
        }
      >
        {oriantation}
      </button>
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