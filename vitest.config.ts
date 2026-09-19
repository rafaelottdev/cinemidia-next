import path from "node:path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ativa o Alias
    },
  },

  test: {
    environment: "jsdom", // Ativa o localStorage do jsdom
    setupFiles: ["./src/tests/setup.ts"],
  },
})
