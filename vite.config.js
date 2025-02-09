import { defineConfig } from "vite"; // Importa defineConfig de Vite
import react from "@vitejs/plugin-react"; // Importa el plugin de React para Vite
import tailwindcss from "@tailwindcss/vite"; // Importa el plugin de Tailwind CSS para Vite

export default defineConfig({
  plugins: [
    react(), // Agrega el plugin de React
    tailwindcss(), // Agrega el plugin de Tailwind CSS
  ],
  base: "/Portfolio_Agustin/",
  build: {
    rollupOptions: {
      input: "./index.html", // Especifica la entrada para el bundle (archivo index.html)
    },
  },
});
