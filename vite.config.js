import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fontPreview: resolve(__dirname, "font-preview.html"),
      },
    },
  },
});

