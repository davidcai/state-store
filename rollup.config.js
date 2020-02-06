import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      dir: "dist",
      sourcemap: true
    },
    {
      format: "esm",
      file: "dist/state-store.esm.js",
      sourcemap: true
    }
  ],
  external: ["react"],
  plugins: [typescript()]
};
