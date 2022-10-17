import React from "react";
import "./App.css";
import Controls from "./components/Controls";
import SubsetValuesRange from "./components/SubsetValuesRange";
import ValuesRange from "./components/ValuesRange";
import ControlsContextProvider from "./contexts/ControlsContext";

function App() {
  return (
    <div className="App">
      <ControlsContextProvider>
        <div className="App-header">
          <Controls />
          <ValuesRange isMain />
          <SubsetValuesRange />
        </div>
      </ControlsContextProvider>
    </div>
  );
}

export default App;
