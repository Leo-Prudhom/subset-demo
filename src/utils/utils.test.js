import { getValidStepList } from "./utils";

test("tests", () => {
  expect(getValidStepList(0, 10)).toContain([1, 2, 5, 10]);
});
