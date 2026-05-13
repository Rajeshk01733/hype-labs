import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174,
    host: "0.0.0.0",
  },

  plugins: [react(), tailwindcss()],

  optimizeDeps: {
    exclude: ["pdfjs-dist"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
