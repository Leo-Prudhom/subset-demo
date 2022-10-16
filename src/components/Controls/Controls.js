import React, { useContext } from "react";
import { ControlsContext } from "../../contexts/ControlsContext";
import { getValidStepList } from "../../utils/utils";

export default function Controls() {
  const { start, end, step, handleStart, handleEnd, handleStep } =
    useContext(ControlsContext);
  return (
    <div style={{ width: "80%" }}>
      <h4>Controls</h4>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <div className="Controls">
          <label for="start">Start</label>
          <input
            type="number"
            onChange={(e) => handleStart(e.target.value)}
            name="start"
            id="start"
            max={end - 1}
            value={start}
          ></input>
        </div>

        <div>
          <label for="end">End</label>
          <input
            type="number"
            onChange={(e) => handleEnd(e.target.value)}
            name="end"
            id="end"
            value={end}
            min={start + 1}
          ></input>
        </div>

        <div>
          <label for="step">Step</label>
          <select
            onChange={(e) => handleStep(e.target.value)}
            value={step}
            id="step"
          >
            {getValidStepList(start, end).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
