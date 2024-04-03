import typescript from "@rollup/plugin-typescript";
export default {
  input: "main.ts",
  output: [
    {
      file: "dist/esm/index.js",
    },
  ],
  plugins: [typescript()],
};
