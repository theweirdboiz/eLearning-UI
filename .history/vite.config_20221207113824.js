import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        "@pages": path.resolve(__dirname, "./sr/pages"),
      },
    ],
  },
  plugins: [react()],
});
