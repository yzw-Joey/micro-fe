import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun("vue-app", {
      useDevMode: true,
    }),
  ],
  server: {
    port: 7001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
