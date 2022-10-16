import React, { useContext, useMemo, memo } from "react";
import { ControlsContext } from "../../contexts/ControlsContext";
import Subset from "./Subset";

function Subsets() {
  const { start, end, step } = useContext(ControlsContext);

  const subsetWidth = useMemo(() => {
    if (start < end && step <= end) return `${(step / (end - start)) * 100}%`;
  }, [start, end, step]);

  const subsetsValue = useMemo(() => {
    let newArr = [];
    for (let index = start; index < end; index += step) {
      newArr = [...newArr, index];
    }
    return newArr;
  }, [start, end, step]);

  const subsetsData = useMemo(
    () => subsetsValue?.map((value) => ({ value, subsetWidth })),
    [subsetsValue, subsetWidth]
  );

  return (
    <div style={{ margin: "150px 0", width: "100%" }}>
      <h4>Subset</h4>
      <div className="Subsets-list">
        {subsetsData?.map(({ value, subsetWidth }, i) => (
          <Subset
            key={value}
            width={subsetWidth}
            start={value}
            end={value + step - start}
            isStart={i === 0}
            isEnd={i === subsetsData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(Subsets);
