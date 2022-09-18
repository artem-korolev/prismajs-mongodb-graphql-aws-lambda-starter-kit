import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import copy from 'rollup-plugin-copy';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-ts-lib",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      copy({
        targets: [
          { src: 'prisma/*', dest: ['dist/cjs', 'dist/esm'] },
          { src: 'node_modules/.prisma/client/*.node', dest: ['dist/cjs/', 'dist/esm/'] },
        ]
      }),
      external(),
      resolve({ preferBuiltins: true }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];