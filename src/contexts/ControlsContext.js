import React, { createContext, useCallback, useEffect, useState } from "react";
import { getValidStepList } from "../utils/utils";

export const ControlsContext = createContext(null);

export default function ControlsContextProvider({ children }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(100);
  const [step, setStep] = useState(10);

  useEffect(() => {
    const stepList = getValidStepList(start, end);
    let newStep = stepList.includes(step) ? step : stepList[0];
    return () => {
      setStep(newStep);
    };
  }, [start, end]);

  const handleStart = useCallback((value) => {
    setStart(Number(value));
  }, []);

  const handleEnd = useCallback((value) => {
    setEnd(Number(value));
  }, []);

  const handleStep = useCallback((value) => {
    setStep(Number(value));
  }, []);

  return (
    <ControlsContext.Provider
      value={{ handleStart, start, handleEnd, end, handleStep, step }}
    >
      {children}
    </ControlsContext.Provider>
  );
}
