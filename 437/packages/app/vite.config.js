import {defineConfig} from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        login: "login.html"
      }
    }
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      "/auth": "http://localhost:3000",
      "/images": "http://localhost:3000",
      "/register": "http://localhost:3000"
    }
  }
});

