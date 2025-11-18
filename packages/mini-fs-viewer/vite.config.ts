import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MiniFsViewer",
      fileName: "mini-fs-viewer",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "@mini-fs/core"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mini-fs/core": "MiniFsCore"
        }
      }
    },
    sourcemap: false
  }
});
