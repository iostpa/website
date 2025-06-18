import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { resolve, join } from "path";
import { copyFileSync } from "fs";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "copy-404",
          closeBundle() {
            const dist = resolve(__dirname, "dist");
            copyFileSync(
              "404.html",
              join(dist, "404.html")
            );
          },
        },
      ],
    },
  },
});
