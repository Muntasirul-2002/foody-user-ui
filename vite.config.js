import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/user": "https://foody-backend-k0z8.onrender.com",
    },
  },
  plugins: [react()],
});
