import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "./",
  },
  build: {
    outDir: "./dist",
  },
  root: "./",
});
