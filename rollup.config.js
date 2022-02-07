import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import url from "@rollup/plugin-url"
import copy from "rollup-plugin-copy"
import generatePackage from "rollup-plugin-generate-package-json"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import typescript from "rollup-plugin-typescript2"
import remove from "rollup-plugin-delete"
import multi from "rollup-plugin-multi-input"

const config = {
  input: [
    "src/index.ts",
    "src/components/**/*.ts(x)?",
    "src/core/*.ts(x)?",
    "src/icons/*.ts(x)?",
    "src/theme/*.ts(x)?",
    "src/overrides/*.ts(x)?"
  ],
  output: [{ dir: "lib", format: "cjs", exports: "named" }],
  plugins: [
    multi(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfigOverride: {
        exclude: ["src/stories"]
      }
    }),
    generatePackage({
      baseContents: (pkg) => ({
        name: pkg.name,
        author: pkg.author,
        version: pkg.version,
        license: pkg.license,
        keywords: pkg.keywords,
        devDependencies: pkg.devDependencies,
        peerDependencies: pkg.peerDependencies
      })
    }),
    copy({
      targets: [
        { src: "definitions/", dest: "lib/" },
        { src: "README.md", dest: "lib/" },
        { src: "LICENSE.md", dest: "lib/" }
      ]
    }),
    remove({
      targets: ["lib/*"]
    }),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ["**/*.woff", "**/*.woff2", "**/*.eot", "**/*.ttf", "**/*.png", "**/*.svg", "**/*.jpg"],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity
    })
  ]
}

export default config
