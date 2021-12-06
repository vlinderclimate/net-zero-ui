import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import url from "@rollup/plugin-url"
import copy from "rollup-plugin-copy"
import generatePackage from "rollup-plugin-generate-package-json"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import typescript from "rollup-plugin-typescript2"
import remove from "rollup-plugin-delete"
import multi from "rollup-plugin-multi-input"
import image from "@rollup/plugin-image"

const config = {
  input: ["./src/**/*.ts(x)?"],
  output: [{ dir: "lib", format: "esm", exports: "named" }],
  plugins: [
    multi(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    image(),
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
        { src: "README.md", dest: "lib/" },
        { src: "LICENSE.md", dest: "lib/" }
      ]
    }),
    remove({
      targets: ["lib/*"]
    }),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ["**/*.woff", "**/*.woff2", "**/*.eot", "**/*.ttf"],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity
    })
  ]
}

export default config
