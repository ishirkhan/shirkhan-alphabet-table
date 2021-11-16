const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    minify: true,
    outDir: "dist",
    sourcemap: false,
    lib: {
      name: "shirkhan-alphabet-table",
      entry: path.resolve(__dirname, "src/table/index.ts"),
      fileName: (format) => `shirkhan-alphabet-table.${format}.js`,
    },
    rollupOptions: {},
  },
});
