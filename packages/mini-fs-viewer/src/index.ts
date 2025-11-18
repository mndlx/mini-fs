import { exampleCoreApi } from "mini-fs-core";
export * from "../core";

export function ExampleViewerApi() {
  return `viewer + ${exampleCoreApi()}`;
}
