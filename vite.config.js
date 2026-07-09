import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
   base: "/kanjian-shanxi/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        "place-detail": "place-detail.html",
        prototype: "prototype.html"
      }
    }
  }
});
