import React, { useContext, useMemo, memo, useState, useEffect } from "react";
import { ControlsContext } from "../../contexts/ControlsContext";
import Subset from "./Subset";

function ValuesRange({ isMain }) {
  const { start, end, step, handleSubsetClick } = useContext(ControlsContext);
  const [activeIndex, setActiveIndex] = useState(null);

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

  useEffect(() => {
    return () => {
      setActiveIndex(null);
    };
  }, [start, end, step]);

  return (
    <div style={{ margin: "150px 0", width: "100%" }}>
      {isMain && <h4>{`De ${start} à ${end} avec un pas de ${step}`}</h4>}
      <div className="Subsets-list">
        {subsetsData?.map(({ value, subsetWidth }, i) => {
          let isEnd = i === subsetsData.length - 1;
          return (
            <Subset
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              currentIndex={i}
              key={value}
              width={subsetWidth}
              start={i === 0 ? value : value - step}
              end={!isEnd ? value + step : end}
              step={step}
              isStart={i === 0}
              isEnd={isEnd}
              onSubsetClick={handleSubsetClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default memo(ValuesRange);
