import React from "react";
import "./App.css";
import Controls from "./components/Controls";
import Subsets from "./components/Subsets";
import ControlsContextProvider from "./contexts/ControlsContext";

function App() {
  return (
    <div className="App">
      <ControlsContextProvider>
        <div className="App-header">
          <Controls />
          <Subsets />
        </div>
      </ControlsContextProvider>
    </div>
  );
}

export default App;
