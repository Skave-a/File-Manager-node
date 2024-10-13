import { sep } from "path";

export const up = (curDir) =>
  curDir.split(sep).length > 1
    ? curDir.split(sep).slice(0, -1).join(sep)
    : curDir;
