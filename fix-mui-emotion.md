Quick fixes to resolve "Could not resolve '@emotion/styled'":

1) Install Emotion (recommended for MUI v5)
# npm
npm install @emotion/react @emotion/styled
# yarn
yarn add @emotion/react @emotion/styled
# pnpm
pnpm add @emotion/react @emotion/styled

2) OR (use styled-components instead)
# install styled-components + MUI styled-engine-sc
npm install styled-components @mui/styled-engine-sc
# then add a Vite/webpack alias so @mui/styled-engine -> @mui/styled-engine-sc

Vite example (vite.config.ts):
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
});

3) After installing: stop dev server, delete node_modules/.vite (or node_modules), restart dev server (npm run dev / yarn dev).
