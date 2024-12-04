import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), pugPlugin()],
  build: {
    outDir: 'dist', // Asegura que los archivos se generen en la carpeta 'dist' para el deploy
    assetsDir: 'assets', // Directorio para los archivos estáticos generados
    sourcemap: false, // Opcional: puedes desactivar los mapas de fuente en producción si no los necesitas
    // Puedes agregar más configuraciones aquí si lo necesitas
  },
  server: {
    port: 3000, // Puerto en el que se ejecutará el servidor de desarrollo
  },
  base: './', // Asegura que las rutas relativas funcionen correctamente, especialmente si usas React Router
});
