
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure SPA routing works properly in production
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate a 404 page for GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Set the base path for GitHub Pages - make sure this matches your repository name
  // If your site is deployed at https://username.github.io/repo-name/, use '/repo-name/'
  // If your site is deployed at the root (https://username.github.io/), use '/'
  base: './'
}));
