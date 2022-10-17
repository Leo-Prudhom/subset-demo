import React, { useContext, useMemo } from "react";
import { ControlsContext } from "../../contexts/ControlsContext";

export default function SubsetValuesRange() {
  const { subsetValues } = useContext(ControlsContext);
  const start = useMemo(() => subsetValues?.start, [subsetValues]);
  const end = useMemo(() => subsetValues?.end, [subsetValues]);

  return (
    subsetValues && (
      <div>
        {start} - {end}
      </div>
    )
  );
}
