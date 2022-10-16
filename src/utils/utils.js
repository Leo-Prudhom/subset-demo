export function getValidStepList(start, end) {
  let validStepList = [];
  for (let index = start; index <= end; index++) {
    if ((end - start) % index === 0) {
      validStepList = [...validStepList, index];
    }
  }
  return validStepList;
}
