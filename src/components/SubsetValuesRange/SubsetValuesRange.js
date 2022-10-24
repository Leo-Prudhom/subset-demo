import React, { useContext, useMemo } from "react";
import { ControlsContext } from "../../contexts/ControlsContext";
import { getValidStepList } from "../../utils/utils";
import Subset from "../ValuesRange/Subset";

export default function SubsetValuesRange() {
  const { subsetValues } = useContext(ControlsContext);
  const start = useMemo(() => subsetValues?.start, [subsetValues]);
  const end = useMemo(() => subsetValues?.end, [subsetValues]);
  const validStepsList = useMemo(
    () => getValidStepList(start, end),
    [start, end]
  );
  const defaultStepIndex = Math.floor(validStepsList.length / 2);

  const subSubsetsValues = useMemo(() => {
    let newArr = [];
    for (let index = start; index < end; index += defaultStepIndex) {
      newArr = [...newArr, index];
    }
    return newArr;
  }, [start, end, defaultStepIndex]);

  const subsetWidth = useMemo(() => {
    if (start < end && defaultStepIndex <= end)
      return `${(defaultStepIndex / (end - start)) * 100}%`;
  }, [start, end, defaultStepIndex]);

  const subsetsData = useMemo(
    () => subSubsetsValues?.map((value) => ({ value, subsetWidth })),
    [subSubsetsValues, subsetWidth]
  );

  return (
    subsetValues && (
      <>
        <h6>{`De ${start} à ${end} avec un pas de ${defaultStepIndex}`}</h6>
        <div className="Subsets-list">
          {subsetsData.map(({ value, subsetWidth }, i) => {
            let isEnd = i === subsetsData.length - 1;
            return (
              <Subset
                noAction
                key={value}
                width={subsetWidth}
                start={i === 0 ? value : value - defaultStepIndex}
                end={!isEnd ? value + defaultStepIndex : end}
                step={defaultStepIndex}
                isStart={i === 0}
                isEnd={isEnd}
              />
            );
          })}
        </div>
      </>
    )
  );
}
