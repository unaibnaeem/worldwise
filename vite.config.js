import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
});

// import eslint from "vite-plugin-eslint";
// , eslint()
