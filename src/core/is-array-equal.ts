import { isEmpty, isEqual, size, xorWith } from "lodash";

export const isArrayEqual = (x: unknown[], y: unknown[]) =>
  size(x) === size(y) && isEmpty(xorWith(x, y, isEqual));
