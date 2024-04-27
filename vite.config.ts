import { defineConfig, Plugin } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"

const fullReloadAlways: Plugin = {
  name: "full-reload",
  handleHotUpdate({ server }) {
    server.hot.send({ type: "full-reload" })
    return []
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), fullReloadAlways],
})
