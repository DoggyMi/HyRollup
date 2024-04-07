import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "main.ts",
  external: [/node_modules/],
  output: [
    {
      file: "dist/esm/index.js",
    },
  ],
  plugins: [
    typescript(),
    nodeResolve({ browser: true }), //commonjs(),
    json(),
  ],
};
