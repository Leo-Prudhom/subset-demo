import React, { useContext } from "react";
import { ControlsContext } from "../../contexts/ControlsContext";
import SubsetValuesRange from "./SubsetValuesRange";

export default function SubsetValuesRangeBase() {
  const { step } = useContext(ControlsContext);
  return step > 1 && <SubsetValuesRange />;
}
