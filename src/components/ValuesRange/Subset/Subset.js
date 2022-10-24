import React from "react";

export default function Subset({
  activeIndex,
  setActiveIndex,
  currentIndex,
  width,
  start,
  end,
  isStart,
  isEnd,
  onSubsetClick,
  step,
  noAction,
}) {
  return (
    <div
      onClick={() => {
        if (!noAction) {
          setActiveIndex(currentIndex);
          onSubsetClick(isStart ? start : start + step, end);
        }
      }}
      className={activeIndex === currentIndex ? "Subset-active" : "Subset"}
      style={{
        maxWidth: `calc(${width} - 10px)`,
        width: `calc(${width} - 10px)`,
      }}
    >
      <div className="Subset-values">
        <span className="Subset-start">{isStart && start}</span>
        <span className={!isEnd && "Subset-end"}>{end}</span>
      </div>
    </div>
  );
}
