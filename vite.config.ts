import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(pagesDir, "popup", "index.html"),
        background: resolve(pagesDir, "background", "index.ts"),
      },
      output: {
        entryFileNames: "src/pages/[name]/index.js",
        chunkFileNames: "assets/js/[name].js",
      },
    },
  },
});
