import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import copy from 'rollup-plugin-copy';

const packageJson = require("./package.json");

export default [
  {
    input: "src/server.ts",
    output: [
      {
        file: "dist/server.js",
        format: "esm",
        sourcemap: false,
      },
      // {
      //   file: packageJson.module,
      //   format: "esm",
      //   sourcemap: true,
      // },
    ],
    plugins: [
      // copy({
      //   targets: [
      //     { src: 'prisma/*', dest: ['dist/cjs', 'dist/esm'] },
      //     { src: 'node_modules/.prisma/client/*.node', dest: ['dist/cjs/', 'dist/esm/'] },
      //   ]
      // }),
      external(),
      resolve({ preferBuiltins: true }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", module: "esnext" }),
      terser(),
    ],
  }
];
