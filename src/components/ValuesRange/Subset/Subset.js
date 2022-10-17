import React from "react";

export default function Subset({
  width,
  start,
  end,
  isStart,
  isEnd,
  onSubsetClick,
  step,
}) {
  return (
    <div
      onClick={() => onSubsetClick(isStart ? start : start + step, end)}
      className="Subset"
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
