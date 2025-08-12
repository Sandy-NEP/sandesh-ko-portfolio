import path from 'node:path';
import react from '@vitejs/plugin-react';
import { createLogger, defineConfig } from 'vite';

// Dummy Error Handler Scripts
const configHorizonsViteErrorHandler = `console.log("Vite Error Handler Loaded");`;
const configHorizonsRuntimeErrorHandler = `console.log("Runtime Error Handler Loaded");`;
const configHorizonsConsoleErrroHandler = `console.log("Console Error Handler Loaded");`;
const configWindowFetchMonkeyPatch = `console.log("Window Fetch Patch Loaded");`;

// Plugin to Inject HTML Error Handlers
const addTransformIndexHtml = {
  name: 'add-transform-index-html',
  transformIndexHtml(html) {
    return {
      html,
      tags: [
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: configHorizonsRuntimeErrorHandler,
          injectTo: 'head',
        },
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: configHorizonsViteErrorHandler,
          injectTo: 'head',
        },
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: configHorizonsConsoleErrroHandler,
          injectTo: 'head',
        },
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: configWindowFetchMonkeyPatch,
          injectTo: 'head',
        },
      ],
    };
  },
};

// Suppress all warnings
console.warn = () => {};

// Custom Logger to Ignore PostCSS Warnings
const logger = createLogger();
const loggerError = logger.error;
logger.error = (msg, options) => {
  if (options?.error?.toString().includes('CssSyntaxError: [postcss]')) {
    return;
  }
  loggerError(msg, options);
};

// FINAL CONFIG EXPORT
export default defineConfig({
  base: '/', // Fixed for Vercel deployment
  customLogger: logger,
  plugins: [react(), addTransformIndexHtml],
  server: {
    host: '0.0.0.0',
    port: 5173,
    cors: true,
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
    },
    // Removed allowedHosts for cleaner config - add back if needed for local development
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
